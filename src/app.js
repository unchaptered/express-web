import express from 'express';

import getConfig from './settings/config';
import getMongoDB from './settings/database';

import LoggerFactory from './factories/logger.factory';

import authRouter from './auth/auth.router';
import homeRouter from './home/home.router';
import shopRouter from './shop/shop.router';

getConfig();
getMongoDB();

const PORT = process?.env?.PORT ?? 8800;
const MODE = process?.env?.NODE_ENV; // prod, dev, test

const app = express();
    
app.use(express.json());

if (MODE !== 'test') {
    app.use(MODE === 'prod' ? LoggerFactory.getWinstonLogger()
                            : LoggerFactory.getMorganLogger());
}

app.use('/auth', authRouter);
app.use('/shop', shopRouter);
app.use('/:path', homeRouter);

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'test') console.log(`Server is running on ${PORT}`);
});

export default app;
