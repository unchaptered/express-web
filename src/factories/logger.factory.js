import MorganLogger from './classes/logger/morgan.logger';
import WinstonLogger from './classes/logger/winston.logger';

/**
 * 다형성을 이용한 로거 생성
 */
export default class LoggerFactory {

    constructor() {
        throw new Error('Logger Factory is utility class');
    }

    static getLogger(MODE) {
        if (MODE !== 'test') {
            if (MODE !== 'prod') return LoggerFactory.getMorganLogger();
            else return LoggerFactory.getWinstonLogger();
        }
        return undefined;
    }

    static getMorganLogger() {
        return MorganLogger.getInstance();
    }
    // for winston
    static getWinstonLogger() {
        return WinstonLogger.getInstance();
    }
    
}