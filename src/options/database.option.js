import mongoose from 'mongoose';

export default getMongoDB = (SERVER_MODE, DB_ADDRESS) => {

    const mongooseModule = mongoose.connect(DB_ADDRESS)
        .then(() => {
            if (SERVER_MODE !== 'test') console.log('MongoDB is running on Atlas')
        })
        .catch(error => {
            if (SERVER_MODE !== 'test') console.log('MongoDB is stucked on Atlas', JSON.stringify(error))
        });
        
}
