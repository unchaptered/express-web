import { getCorsInstance } from '../../../src/options/cors.option';

describe ('Cors', () => {

    it ('getCorsInstance must be function', () => expect(typeof getCorsInstance).toBe('function'));

});