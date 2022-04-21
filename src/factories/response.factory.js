import SuccessForm from './classes/response/success.form';
import FailureForm from './classes/response/failure.form';
/**
 * 다형성을 이용한 반환 객체 생성
 */
class ResponseFactory {

    getGoodResponse(message, data) {
        return new SuccessForm(message, data);
    }
    
    getBadResponse(message) {
        return new FailureForm(message);
    }
    
}