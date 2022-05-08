import express from 'express';

import getHelmet from './options/helmet.option';


/**
 * @param {*} MODE prod, dev, test
 * @param {*} PORT 80, custom, csutom
 * @returns app: Express.allication;
 */
const createServer = (MODE, PORT) => {
    if (!MODE && !PORT) throw new Error('MODE & PORT is neccessary');

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended:true }));

    app.use(getHelmet());
    
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

    return app;

}

export default createServer;