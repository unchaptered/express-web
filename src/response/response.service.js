import GoodResponse from './classes/good.response';
import BadResponse from './classes/bad.response';

/**
 * 다형성을 이용한 안정성 확보 및 객체 생성 책임
 */
class FactoryService {

    getGoodResponse(message, data) {
        return new GoodResponse(message, data);
    }
    getBadResponse(message) {
        return new BadResponse(message);
    }
    
}