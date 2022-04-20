import MorganLogger from './classes/logger/morgan.logger';
import WinstonLogger from './classes/logger/winston.logger';

/**
 * 다형성을 이용한 로거 생성
 */
class LoggerService {

    constructor() {
        throw new Error('Logger Service is utility class');
    }

    getMorganLogger() {
        return MorganLogger.getInstance();
    }
    // for winston
    getWinstonLogger() {
        return WinstonLogger.getInstance();
    }
    
}