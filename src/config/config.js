import * as dotenv from 'dotenv';

export default class Config {

    constructor() {
        if (this.config) return;

        this.MODE = process.env.NODE_ENV;
        this.PORT = +process.env.PORT;
        this.PG_CONF = {
            HOST: process.env.PG_CONF_HOST,
            USER: process.env.PG_CONF_USER,
            DATABASE: process.env.PG_CONF_DATABASE,
            PASSWORD: process.env.PG_CONF_PASSWORD,
            PORT: +process.env.PG_CONF_PORT,
            IDLE_TIMEOUT: +process.env.PG_CONF_IDLE_TIMEOUT,
            CONNECTION_MAX: +process.env.PG_CONF_CONNECTION_MAX,
            CONNECTION_TIMEOUT:+process.env.PG_CONF_CONNECTION_TIMEOUT
        };
        this[Symbol.iterator] = function* () {
            for (const key of Object.keys(this))
                yield this[key];
        };
        this.PG_CONF[Symbol.iterator] = function* () {
            for (const key of Object.keys(this))
                yield this[key];
        };
        
        for (const val of this) {
            if (typeof val === 'object') {
                for (const v of val) {
                    if (!v) throw new Error('ENV must have value');
                }
            }
            else {
                if (!val) throw new Error('ENV must have value');
            }
        }
    }

}