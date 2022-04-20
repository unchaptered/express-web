import Response from "./response";

class BadResponse extends Response {

    constructor(message, {}) {

        super(message, {});

        this.isSuccess = false

    }

}