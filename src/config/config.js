import * as dotenv from 'dotenv';

export default class Config {

    constructor() {
        if (this.config) return;

        this.MODE = process.env.NODE_ENV;
        this.PORT = process.env.PORT;
        
        this[Symbol.iterator] = function* () {
            for (const key of Object.keys(this))
                yield this[key];
        };
        
        for (const val of this)
            if (val === undefined) throw new Error('ENV must have value');
    }

}