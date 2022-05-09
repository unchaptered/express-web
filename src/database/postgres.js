import { Pool } from 'pg';

class Postgres {
    pool;

    constructor() {
        throw new Error('Postrgres is utility class');
    }

    static getPoolInstance(PgConf) {
        if (this.pool) return;

        this.pool = new Pool({
            host: PgConf.HOST,
            user: PgConf.USER,
            database: PgConf.DATABASE,
            password: PgConf.PASSWORD,
            port: PgConf.PORT
        });

        this.pool.on('connect', () => console.log('success'));
        this.pool.on('acquire', () => console.log('acquire'));
        this.pool.on('error', () => console.log('error'));
        this.pool.on('remove', () => console.log('remove'));

        // this?.pool?.totalCount;
        // this?.pool?.idleCount;
        // this?.pool?.waitingCount;
        return this.pool;
    }

    /**
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

export default Postgres;