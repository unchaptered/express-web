import * as dotenv from 'dotenv';

export default getConfig = (SERVER_MODE) => {

    const configOption = {
        path: SERVER_MODE === 'prod' ? '.env.prod'
            : SERVER_MODE === 'dev'  ? '.env.dev' : '.env.test'
    };
    
    const configModule = dotenv.config(configOption);
    
}
