import SuccessForm from './classes/success.form';
import FailureForm from './classes/failure.form';

/**
 * 다형성을 이용한 반환 객체 생성
 */
class ResFormFactory {
    
    static getSuccessForm(message, data) {
        return new SuccessForm(message, data);
    }
    
    static getFailureForm(message) {
        return new FailureForm(message);
    }
    
}

export default ResFormFactory;