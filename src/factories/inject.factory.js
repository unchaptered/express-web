export default class InjectFactory {
    getServerMode = () => process.env.NODE_ENV;
    getDatabase = () => process.env.DB_ADDRESS;
    getPort = () => process.env.PORT;
}