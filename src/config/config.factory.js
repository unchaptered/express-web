import * as dotenv from 'dotenv';
import Config from './config';

export default class ConfigFactory { 

    constructor() {
        throw new Error('Config Factory is utility class');
    }

    static setConfigPath = (MODE) => {
        return dotenv.config({
            path: MODE === 'prod' ? '.env.prod'
                : MODE === 'dev'  ? '.env.dev' : '.env.test'
        });
    }

    static getConfigInstance() {
        return new Config();
    }

}