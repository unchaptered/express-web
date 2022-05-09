import { Pool } from "pg";

import PostgresFactory from "../../../src/database/postgres.factory";

jest.mock('pg', () => {
    const myPool = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
        on: jest.fn()
    };

    return { Pool: jest.fn(() => myPool) };
});

describe ('PotsgresFactory', () => {

    it ('PostgresFactory.pool\'s first state is undefined', () => expect(PostgresFactory.pool).toBeUndefined());
    it ('new PostgresFactory() throw Error(\'Postgres Factory is utility class\')', () =>
        expect(() => new PostgresFactory()).toThrow('Postgres Factory is utility class'));

    describe ('Postgres contain 3 static methods', () => {

        it ('getPoolInstance must be function', () => expect(typeof PostgresFactory.getPoolInstance).toBe('function'));
        it ('getPoolConnect must be function', () => expect(typeof PostgresFactory.getPoolConnect).toBe('function'));
        it ('runQueryInClient must be function', () => expect(typeof PostgresFactory.runQueryInClient).toBe('function'));
        
    })

    describe ('Postgres factory returns Pool', () => {

        let pgConfig, pgConfigResult;

        beforeAll(() => {
            pgConfig = { HOST: 'sample_host', USER: 'sample_user', DATABASE: 'sample_databse', PASSWORD: 'sample_password', PORT: 'sample_port' };
            pgConfigResult = { host: pgConfig.HOST, user: pgConfig.USER, database: pgConfig.DATABASE, password: pgConfig.PASSWORD, port: pgConfig.PORT };
        });

        it ('Only one pool must be exists', () => {

            expect(PostgresFactory.pool).toBeUndefined();

            const firstPool = PostgresFactory.getPoolInstance(pgConfig);
            expect(Pool).toBeCalledTimes(1);
            expect(Pool).toBeCalledWith(pgConfigResult);

            expect(firstPool).toBeDefined();

            expect(PostgresFactory.pool).toBeDefined();
            expect(PostgresFactory.pool).toBe(firstPool);

            const secondPool = PostgresFactory.getPoolInstance(pgConfig);
            expect(Pool).toBeCalledTimes(1);
            expect(Pool).not.toBeCalledTimes(2);

            expect(secondPool).toBeUndefined();
            
            expect(PostgresFactory.pool).not.toBe(secondPool);
            
        });


    });

    describe ('Postgres factory returns Client from Pool', () => {
        
        let mockClient, mockQuery, errorQuery;

        beforeEach(() => {
            PostgresFactory.pool = {
                totalCount: 0,
                connect: jest.fn(() => PostgresFactory.pool.totalCount++),
                query: jest.fn(),
                release: jest.fn(() => PostgresFactory.pool.totalCount--)
            };

            mockClient = {
                query: jest.fn((str) => {
                    if (str === 'error') throw new Error('error');
                }),
                release: jest.fn()
            };
            mockQuery = 'test';
            errorQuery = 'error';
        });

        it ('getPoolConnect call PostgresFactory.pool.connect() by 1 time', () => {

            expect(PostgresFactory.pool).toBeDefined();
            PostgresFactory.getPoolConnect();
            expect(PostgresFactory.pool.connect).toBeCalledTimes(1);
            expect(PostgresFactory.pool.totalCount).toBe(1);

        });

        it ('runQueryInClient call poolClient.query() by 3 times', () => {

            expect(mockClient).toBeDefined();
            expect(mockQuery).toBeDefined();

            PostgresFactory.runQueryInClient(mockClient, mockQuery);

            expect(mockClient.query).toBeCalledTimes(3);
            expect(mockClient.query).toBeCalledWith('BEGIN');
            expect(mockClient.query).toBeCalledWith(mockQuery);
            expect(mockClient.query).toBeCalledWith('COMMIT');
            expect(mockClient.release).toBeCalledTimes(1);
            
        });

        it ('runQueryInClient call poolClient.query() by 3 tiems with error', () => {

            expect(mockClient).toBeDefined();
            expect(errorQuery).toBeDefined();

            PostgresFactory.runQueryInClient(mockClient, errorQuery);

            expect(mockClient.query).toBeCalledTimes(3);
            expect(mockClient.query).toBeCalledWith('BEGIN');
            expect(mockClient.query).toBeCalledWith(errorQuery);
            expect(mockClient.query).toBeCalledWith('ROLLBACK');
            expect(mockClient.release).toBeCalledTimes(1);


        });

    });

});