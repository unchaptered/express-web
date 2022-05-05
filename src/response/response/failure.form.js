import ResForm from "./res.form";

class FailureForm extends ResForm {

    constructor(message) {

        super(message, {});

        this.isSuccess = false

    }

}

export default FailureForm;