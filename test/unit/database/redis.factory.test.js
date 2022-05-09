import { createClient } from "redis";

import RedisFactory from "../../../src/database/redis.factory";

jest.mock('redis', () => {
    const myRedis = {
        on: jest.fn(),
        connect: jest.fn()
    };

    return { createClient: jest.fn(() => myRedis)};
});

describe ('Redis Factory', () => {

    it ('RedisFactory.client\'s first state is undefined', () => expect(RedisFactory.client).toBeUndefined());
    it ('new RedisFactory() throw Error(\'Redis Factory is utility class\')', () => 
        expect(() => new RedisFactory()).toThrow('Redis Factory is utility class'));

    describe ('RedisFactory contain 2 static methods', () => {

        it ('getClientInstance must be function', () => expect(typeof RedisFactory.getClientInstance).toBe('function'));
        it ('getClientConnect must be function', () => expect(typeof RedisFactory.getClientConnect).toBe('function'));

    });

    describe ('Redis factory retruns Client', () => {

        let rdConf, rdConfResult;

        beforeAll(() => {
            rdConf = { HOST: 'sample_host', PORT: 'sample_port', DATABASE: 'sample_database' };
            rdConfResult = { host: rdConf.HOST, port: rdConf.PORT, database: rdConf.DATABASE };
        });

        it ('Only one client must be exists', () => {

            expect(RedisFactory.client).toBeUndefined();

            const firstClient = RedisFactory.getClientInstance(rdConf);

            expect(createClient).toBeCalledTimes(1);
            expect(createClient).toBeCalledWith(rdConfResult);

            expect(firstClient).toBeDefined();
            expect(RedisFactory.client).toBeDefined();
            expect(RedisFactory.client).toBe(firstClient);

            const secondClient = RedisFactory.getClientInstance(rdConf);

            expect(createClient).toBeCalledTimes(1);
            expect(createClient).not.toBeCalledTimes(2);
            
            expect(secondClient).toBeUndefined();
            expect(RedisFactory.client).not.toBe(secondClient);

        });

        it ('getClientConnect call RedisFactory.client.connect() by 1 time', () => {

            expect(RedisFactory.client).toBeDefined();

            RedisFactory.getClientConnect();

            expect(RedisFactory.client.connect).toBeCalledTimes(1);
            
        });
        
    });
});