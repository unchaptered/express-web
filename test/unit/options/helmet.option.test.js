import {
    contentSecurityPolicyOption,
    expectOption,
    dnsPrefetchControlOption,
    rameguardOption,
    hstsOption,
    referrerPolicyOption,
    getHelmet
} from '../../../src/options/helmet.option';

describe ('Helmet', () => {

    it ('getHelmet must be function', () => expect(typeof getHelmet).toBe('function'));
    it ('getHelmet must return function', () => { expect(typeof getHelmet()).toBe('function')});

    it('6 kind of option must be object', () => {
        expect(typeof contentSecurityPolicyOption).toBe('object');
        expect(typeof expectOption).toBe('object');
        expect(typeof dnsPrefetchControlOption).toBe('object');
        expect(typeof rameguardOption).toBe('object');
        expect(typeof hstsOption).toBe('object');
        expect(typeof referrerPolicyOption).toBe('object');
    });

});