import * as dotenv from 'dotenv';

export default class Config {

    constructor() {
        // this means constructor
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
        this.RD_CONF = {
            HOST: process.env.RD_CONF_HOST,
            PORT: process.env.RD_CONF_PORT,
            PASSWORD: process.env.RD_CONF_PASSWORD
        };

        this[Symbol.iterator] = this.gen;
        this.PG_CONF[Symbol.iterator] = this.gen;
        this.RD_CONF[Symbol.iterator] = this.gen;
        
        this.checkValidation();
    }
    
    *gen() {
        for (const key of Object.keys(this))
         yield this[key];
    }
    
    checkValidation() {
        for (const val of this) {
            if (typeof val === 'object') {
                for (const v of val) {
                    if (!v) throw new Error('ENV must have value');
                }
            } else {
                if (!val) throw new Error('ENV must have value');
            }
        }
    }

}