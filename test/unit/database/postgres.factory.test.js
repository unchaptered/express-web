import { Pool } from "pg";

import Postgres from "../../../src/database/postgres.factory";

jest.mock('pg', () => {
    const myPool = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
        on: jest.fn()
    };

    return { Pool: jest.fn(() => myPool) };
});
describe ('Potsgres', () => {

    it ('Postgres.pool\'s first state is undefined', () => expect(Postgres.pool).toBeUndefined());
    it ('new Postgres() throw Error(\'Postgres is utility class\')', () =>
        expect(() => new Postgres()).toThrow('Postrgres is utility class'));

    describe ('Postgres contain 3 static methods', () => {
        it ('getPoolInstance must be function', () => expect(typeof Postgres.getPoolInstance).toBe('function'));
        it ('getPoolConnect must be function', () => expect(typeof Postgres.getPoolConnect).toBe('function'));
        it ('runQueryInClient must be function', () => expect(typeof Postgres.runQueryInClient).toBe('function'));
    })

    describe ('Postgres factory returns Pool', () => {

        let pgConfig, pgConfigResult;

        beforeAll(() => {
            pgConfig = { HOST: 'sample_host', USER: 'sample_user', DATABASE: 'sample_databse', PASSWORD: 'sample_password', PORT: 'sample_port' };
            pgConfigResult = { host: pgConfig.HOST, user: pgConfig.USER, database: pgConfig.DATABASE, password: pgConfig.PASSWORD, port: pgConfig.PORT };
        });

        it ('Only one pool must be exists', () => {

            expect(Postgres.pool).toBeUndefined();

            const firstPool = Postgres.getPoolInstance(pgConfig);
            expect(Pool).toBeCalledTimes(1);
            expect(Pool).toBeCalledWith(pgConfigResult);

            expect(firstPool).toBeDefined();

            expect(Postgres.pool).toBeDefined();
            expect(Postgres.pool).toBe(firstPool);

            const secondPool = Postgres.getPoolInstance(pgConfig);
            expect(Pool).toBeCalledTimes(1);
            expect(Pool).not.toBeCalledTimes(2);

            expect(secondPool).toBeUndefined();
            
            expect(Postgres.pool).not.toBe(secondPool);
            
        });


    });

    describe ('Postgres factory returns Client from Pool', () => {
        
        let mockClient, mockQuery;

        beforeEach(() => {
            Postgres.pool = {
                totalCount: 0,
                connect: jest.fn(() => Postgres.pool.totalCount++),
                query: jest.fn(),
                release: jest.fn(() => Postgres.pool.totalCount--)
            };

            mockClient = {
                query: jest.fn(),
                release: jest.fn()
            };
            mockQuery = 'test';
        });

        it ('getPoolConnect call Postgres.pool.connect() by 1 times', () => {

            expect(Postgres.pool).toBeDefined();
            Postgres.getPoolConnect();
            expect(Postgres.pool.connect).toBeCalledTimes(1);
            expect(Postgres.pool.totalCount).toBe(1);

        });

        it ('runQueryInClient call poolClient.query() by 3 times', () => {

            expect(mockClient).toBeDefined();
            expect(mockQuery).toBeDefined();

            Postgres.runQueryInClient(mockClient, mockQuery);

            expect(mockClient.query).toBeCalledTimes(3);
            expect(mockClient.query).toBeCalledWith('BEGIN');
            expect(mockClient.query).toBeCalledWith(mockQuery);
            expect(mockClient.query).toBeCalledWith('COMMIT');
            expect(mockClient.release).toBeCalledTimes(1);
            
        });

    });

});