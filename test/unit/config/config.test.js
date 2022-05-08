import Config from "../../../src/config/config";
import ConfigFactory from "../../../src/config/config.factory";

describe ('Config', () => {

    describe ('Config Factory', () => {
        it ('constructor() throw Error', () => {
            expect(() => new ConfigFactory())
                .toThrow('Config Factory is utility ');
        });

        it ('static method() list', () => {
            expect(typeof ConfigFactory.setConfigPath).toBe('function');
            expect(typeof ConfigFactory.getConfigInstance).toBe('function');
        });
    });

    // describe ('Config', () => {
    //     it ('is singleton class', () => {
    //         const option = ConfigFactory.setConfigPath('dev');
    //         expect(option).toStrictEqual({ path: '.env.dev' });

    //         const config = ConfigFactory.getConfigInstance();
    //         const configRetry = ConfigFactory.getConfigInstance();
    //         expect(config).toEqual(configRetry);
    //     });
    // });

    describe ('Env Test', () => {

        let MODE_LIST = ['prod', 'dev', 'test'];

        it ('prod must exists in AWS', () => {
            const value = MODE_LIST[0];
            const option = ConfigFactory.setConfigPath(value);
            expect(option).toStrictEqual({ path: '.env.prod' });

            try {
                const config = ConfigFactory.getConfigInstance();
            } catch (error) {
                expect(error).toEqual(new Error('ENV must have value'));
            }

        });

        it ('dev must exists in Local', () => {
            const value = MODE_LIST[1];
            const option = ConfigFactory.setConfigPath(value);
            expect(option).toStrictEqual({ path: '.env.dev' });

            const config = ConfigFactory.getConfigInstance();
            expect(config.MODE).toBeDefined();
            expect(config.PORT).toBeDefined();
            expect(config[Symbol.iterator]).toBeDefined();

            expect(typeof config.PG_CONF).toBe('object');
            expect(config.PG_CONF.HOST).toBeDefined();
            expect(config.PG_CONF.USER).toBeDefined();
            expect(config.PG_CONF.DATABASE).toBeDefined();
            expect(config.PG_CONF.PASSWORD).toBeDefined();
            expect(config.PG_CONF.DATABASE).toBe('dev');
            expect(config.PG_CONF.PORT).toBeDefined();
            expect(config.PG_CONF[Symbol.iterator]).toBeDefined();
        });

        it ('test must exists in Local', () => {
            const value = MODE_LIST[2];

            const option = ConfigFactory.setConfigPath(value);
            expect(option).toStrictEqual({ path: '.env.test' });
            
            const config = ConfigFactory.getConfigInstance();
            expect(config.MODE).toBeDefined();
            expect(config.PORT).toBeDefined();
            expect(config[Symbol.iterator]).toBeDefined();

            expect(typeof config.PG_CONF).toBe('object');
            expect(config.PG_CONF.HOST).toBeDefined();
            expect(config.PG_CONF.USER).toBeDefined();
            expect(config.PG_CONF.DATABASE).toBeDefined();
            expect(config.PG_CONF.DATABASE).toBe('test');
            expect(config.PG_CONF.PASSWORD).toBeDefined();
            expect(config.PG_CONF.PORT).toBeDefined();
            expect(config.PG_CONF[Symbol.iterator]).toBeDefined();
        });
    });

});