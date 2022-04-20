import morgan from 'morgan';

class MorganLogger {

    static logger;

    constructor() {
        throw new Error('Morgan Logger is uility class');
    }

    static getInstance() {
        if (MorganLogger.logger) return;


        return MorganLogger.logger = morgan('dev');

    }

}