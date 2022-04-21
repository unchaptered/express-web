import express from 'express';

import getConfig from './options/config';
import getMongoDB from './options/database';

import InjectFactory from './factories/inject.factory';
import LoggerFactory from './factories/logger.factory';

import authRouter from './auth/auth.router';
import homeRouter from './home/home.router';
import shopRouter from './shop/shop.router';

const MODE = InjectFactory.getServerMode();
const PORT = InjectFactory.getPort() ?? 8800;

getConfig(MODE);
getMongoDB(MODE, InjectFactory.getDatabase());

const app = express();
    
app.use(express.json());
app.use(LoggerFactory.getLogger());

app.use('/auth', authRouter);
app.use('/shop', shopRouter);
app.use('/:path', homeRouter);

app.listen(PORT, () => {
    if (MODE !== 'test') console.log(`Server is running on ${PORT}`);
});

export default app;
