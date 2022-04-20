import Response from "./response";

class GoodResponse extends Response {

    constructor(message, result) {

        super(message, result);

        this.isSuccess = true;

    }

}