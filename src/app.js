import express from 'express';

import getConfig from './config.module';
import getMongoDB from './database.module';

getConfig();
getMongoDB();

const PORT = process?.env?.PORT ?? 8800;

const app = express();
    
app.use(express.json());

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'test') console.log(`Server is running on ${PORT}`);
});

export default app;
