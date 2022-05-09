import ConfigFactory from "../../../src/config/config.factory";

describe ('Config.Dev', () => {

    it ('dev must exists in Local', () => {
        const option = ConfigFactory.setConfigPath('dev');
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
        expect(config.PG_CONF.IDLE_TIMEOUT).toBeDefined();
        expect(config.PG_CONF.CONNECTION_MAX).toBeDefined();
        expect(config.PG_CONF.CONNECTION_TIMEOUT).toBeDefined();
        expect(config.PG_CONF[Symbol.iterator]).toBeDefined();

        expect(typeof config.RD_CONF).toBe('object');
        expect(config.RD_CONF.HOST).toBeDefined();
        expect(config.RD_CONF.PORT).toBeDefined();
        expect(config.RD_CONF.PASSWORD).toBeDefined();
        expect(config.RD_CONF[Symbol.iterator]).toBeDefined();

        expect(() => config.checkValidation()).not.toThrow();

        config.PG_CONF.HOST = undefined;
        expect(() => config.checkValidation()).toThrow('ENV must have value');

        config.PG_CONF.HOST = 'sample';
        expect(() => config.checkValidation()).not.toThrow();

        config.RD_CONF.HOST = undefined;
        expect(() => config.checkValidation()).toThrow('ENV must have value');
        
    });

});