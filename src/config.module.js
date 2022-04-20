import * as dotenv from 'dotenv';

export default function getConfig() {

    const appMode = process.env.NODE_ENV;

    const configOption = {
        path: appMode === 'prod' ? '.env.prod'
            : appMode === 'dev'  ? '.env.dev' : '.env.test'
    };
    
    const configModule = dotenv.config(configOption);
    
}
