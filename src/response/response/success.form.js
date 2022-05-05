import ResForm from "./res.form";

class SuccessForm extends ResForm {

    constructor(message, result) {

        super(message, result);

        this.isSuccess = true;

    }

}

export default SuccessForm;