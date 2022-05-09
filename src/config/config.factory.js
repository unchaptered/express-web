import * as dotenv from 'dotenv';
import Config from './class/config';

export default class ConfigFactory { 

    constructor() {
        throw new Error('Config Factory is utility class');
    }

    static setConfigPath = (MODE) => {
        const option = {
            path: MODE === 'prod' ? '.env.prod'
                : MODE === 'dev'  ? '.env.dev' : '.env.test'
        }
        dotenv.config(option);
        return option;
    }

    static getConfigInstance() {
        return new Config();
    }

}