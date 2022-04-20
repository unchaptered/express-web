// import * as productsController from '../../../src/products/products.controller';
import httpMocks from 'node-mocks-http';

describe('Controller Test', () => {

    let req = null;
    let res = null;
    let next = null;

    beforeEach(() => {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = jest.fn();
    });
    
});