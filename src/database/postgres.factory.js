import { Pool } from 'pg';

class PostgresFactory {
    pool;

    constructor() {
        throw new Error('Postgres Factory is utility class');
    }

    static getPoolInstance(PG_CONF) {
        if (this.pool) return;

        this.pool = new Pool({
            host: PG_CONF.HOST,
            user: PG_CONF.USER,
            database: PG_CONF.DATABASE,
            password: PG_CONF.PASSWORD,
            port: PG_CONF.PORT
        });

        this.pool.on('connect', () => console.log('postgres connection is successed'));
        this.pool.on('acquire', () => console.log('postgres connection is acquired'));
        this.pool.on('error', () => console.log('postgres connection is error'));
        this.pool.on('remove', () => console.log('postgres connection is removed'));

        // this?.pool?.totalCount;
        // this?.pool?.idleCount;
        // this?.pool?.waitingCount;
        return this.pool;
    }

    /**
     * @async you must use async-await keyword when you call getPoolConnect()
     * @returns pg.Client || undefined
     */
    static getPoolConnect() {
        return this.pool?.connect();
    }

    /**
     * 
     * @BEGIN open transaction
     * @COMMIT apply transaction
     * @ROLLBACK deny transaction
     * 
     * @param {*} poolClient pool.connect() returns client instance
     * @param {*} query string
     */
    static runQueryInClient(poolClient, queryString) {

        let result;
        try {
            poolClient.query('BEGIN');

            result = poolClient.query(queryString);

            poolClient.query('COMMIT');
        } catch(err) {
            poolClient.query('ROLLBACK');
            result = err;
        } finally {
            poolClient.release()
            return result;
        }
    }

}

export default PostgresFactory;