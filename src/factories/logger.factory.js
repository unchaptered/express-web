import MorganLogger from './classes/logger/morgan.logger';
import WinstonLogger from './classes/logger/winston.logger';

/**
 * 다형성을 이용한 로거 생성
 */
class LoggerFactory {

    constructor() {
        throw new Error('Logger Service is utility class');
    }

    getLogger(MODE) {
        if (MODE !== 'test') {
            if (MODE !== 'prod') return LoggerFactory.getMorganLogger();
            else return LoggerFactory.getWinstonLogger();
        }
        return undefined;
    }

    getMorganLogger() {
        return MorganLogger.getInstance();
    }
    // for winston
    getWinstonLogger() {
        return WinstonLogger.getInstance();
    }
    
}