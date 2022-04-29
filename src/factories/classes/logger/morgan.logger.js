import morgan from 'morgan';

export default class MorganLogger {

    static logger;

    constructor() {
        throw new Error('Morgan Logger is uility class');
    }

    static getInstance() {
        if (MorganLogger.logger) return;

        return MorganLogger.logger = morgan('dev');
    }

    static resetInstance() {
        MorganLogger.logger = undefined;
    }

}