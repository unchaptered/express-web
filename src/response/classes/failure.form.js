import ResForm from "./res.form";

/**
 * @super(false, message, result);
 */
class FailureForm extends ResForm {

    constructor(message) {
        super(false, message, {});
    }

}

export default FailureForm;