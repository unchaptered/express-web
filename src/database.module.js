import mongoose from 'mongoose';

export default function getMongoDB() {

    const mongooseModule = mongoose.connect(process.env.DB_ADDRESS)
        .then(() => {
            if (process.env.NODE_ENV !== 'test') console.log('MongoDB is running on Atlas')
        })
        .catch(error => {
            if (process.env.NODE_ENV !== 'test') console.log('MongoDB is stucked on Atlas', JSON.stringify(error))
        });
        
}
