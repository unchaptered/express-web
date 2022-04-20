import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

class WinstonLogger {

    static logger;

    constructor() {
        throw new Error('Winston Logger is uility class');
    }

    static getInstance() {
        if (WinstonLogger.logger) return;

        const { combine, timestamp, printf } = winston.format;

        const logDir = 'logs';
        const logFormat = printf(info => `${info.timestamp} ${info.level} ${info.message}`);

        return WinstonLogger.logger = winston.createLogger({
            format: combine(
                timestamp({ format: 'YY-MM-DD HH-mm' }),
                logFormat
            ),
            transports: [
                new winstonDaily({
                    level: 'info',
                    datePattern: 'YYYY-MM-DD',
                    dirname: logDir,
                    filename: `%DATE%.log`,
                    maxFiles: 30,  // 30일치 로그 파일 저장
                    zippedArchive: true, 
                }),
                new winstonDaily({
                    level: 'error',
                    datePattern: 'YYYY-MM-DD',
                    dirname: logDir + '/error',  // error.log 파일은 /logs/error 하위에 저장 
                    filename: `%DATE%.error.log`,
                    maxFiles: 30,
                    zippedArchive: true,
                }),
            ]
        });
    }
    
}



