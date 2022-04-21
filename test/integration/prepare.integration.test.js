import reqeust from 'supertest';
import app from '../../src/app';

describe('Integration Test', () => {

    let getContentType = null;
    let getAccept = null;

    let reqeustSample = null;

    const BASE_URL = '/';

    beforeAll(() => {
        getContentType = () => ['Content-Type', 'application/json'];
        getAccept = () => ['Accept', 'application/json'];
        
        reqeustSample = async (data) => {
            const response = await request(app)
                                    .post(BASE_URL)
                                    .set(...getContentType())
                                    .set(...getAccept())
                                    .send({ ...data });
            return response;
        };
    });
});