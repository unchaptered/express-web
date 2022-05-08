import ConfigFactory from "../../../src/config/config.factory";

describe ('Config.Prod', () => {

    it ('prod must exists in AWS', () => {
        const option = ConfigFactory.setConfigPath('prod');
        expect(option).toStrictEqual({ path: '.env.prod' });

        try {
            const config = ConfigFactory.getConfigInstance();
        } catch (error) {
            expect(error).toEqual(new Error('ENV must have value'));
        }

    });

});