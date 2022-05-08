import ResFormFactory from '../../../src/response/res.form.factory';

import Form from '../../../src/response/response/res.form';
import SuccessForm from '../../../src/response/response/success.form';
import FailureForm from '../../../src/response/response/failure.form';

describe ('Response', () => {

    describe ('Response Factory\'s Method', () => {
        
        let message, result;

        beforeAll (() => {
            
            message = 'test message';
            result = {
                title: 'test title',
                subtitle: 'test subtitle'
            };

        });

        describe ('getSuccessForm', () => {

            it ('must be function', () => {
                expect(typeof ResFormFactory.getSuccessForm).toBe('function');
            });
            it ('must return SuccessForm', () => {
                const form = ResFormFactory.getSuccessForm(message, result);
                expect(form instanceof SuccessForm).toBeTruthy();
                expect(form).toEqual({ isSuccess: true, message, result });
            });

        });

        describe ('getFailureForm', () => {

            it ('must be function', () => {
                expect(typeof ResFormFactory.getFailureForm).toBe('function');
            });
    
            it ('must return FailureForm', () => {
                const form = ResFormFactory.getFailureForm(message);
                expect(form instanceof FailureForm).toBeTruthy()
                expect(form).toEqual({ isSuccess:false, message, result: {} });
            });

        });

    });

});