import { createClient } from 'redis';

class RedisFactory {
    client;

    constructor() {
        throw new Error('Redis Factory is utility class');
    }

    static getClientInstance(RD_CONF) {
        if (this.client) return;

        this.client = createClient({
            host: RD_CONF.HOST,
            port: RD_CONF.PORT,
            database: RD_CONF.DATABASE,
        });

        this.client.on('connect', () => console.log('redis connection is successed'));
        this.client.on('error', () => console.log('redis connection is error'));

        return this.client;
    }

    /**
     * @async you must use async-await keyword when you call getPoolConnect()
     * @returns RedisClient || undefined
     */
    static getClientConnect() {
        return this.client?.connect();
    }
}

export default RedisFactory;