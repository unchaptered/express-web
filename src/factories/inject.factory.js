export default class InjectFactory {

    constructor() {
        throw new Error('InjectFactory is utility class');
    }
    
    // application

    static getServerMode = () => process.env.NODE_ENV;
    static getPort = () => process.env.PORT;

    // databases

    static getMongoAddress = () => process.env.DB_MONGO;

    static getRedisHost = () => process.env.DB_REDIS_HOST;
    static getRedisPort = () => +process.env.DB_REDIS_PORT;
    static getRedisId = () => +process.env.DB_REDIS_ID;
    static getRedisPw = () => process.env.DB_REDIS_PW;

    static getRedisOptions = () => ({
        REDIS_HOST: this.getRedisHost(),
        REDIS_PORT: this.getRedisPort(),
        REDIS_ID: this.getRedisId(),
        REDIS_PW: this.getRedisPw()
    });

    /**
     * @returns getJwtRefreshExipred 랑 똑같지만 숫자를 리턴한다.
     */
    static getRedisRefreshExpired = () => +process.env.DB_REDIS_REFRESH_EXPIRE;

    // authentication

    static getJwtSecret = () => process.env.SECRET;
    static getJwtAlgorithm = () => process.env.ALGORITHM;
    static getJwtAccessExpired = () => process.env.ACCESS_EXPIRED;
    static getJwtRefreshExpired = () => process.env.REFRESH_EXPIRED;
    
}