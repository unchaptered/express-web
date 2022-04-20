import GoodResponse from './classes/good.response';
import BadResponse from './classes/bad.response';

/**
 * 다형성을 이용한 반환 객체 생성
 */
class ResponseFactory {

    getGoodResponse(message, data) {
        return new GoodResponse(message, data);
    }
    
    getBadResponse(message) {
        return new BadResponse(message);
    }
    
}