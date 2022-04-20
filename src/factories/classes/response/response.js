class Response {

    isSuccess;
    message;
    result;

    constructor(message, result) {

        this.message = message;
        this.result = result;

    }

}

export default Response;