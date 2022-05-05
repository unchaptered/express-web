import createServer from './server';
import ConfigFactory from './config/config.factory';

const MODE = process.env.NODE_ENV;

const option = ConfigFactory.setConfigPath(MODE);
const config = ConfigFactory.getConfigInstance();

const app = createServer(config.MODE, config.PORT);

export { option, config, app }