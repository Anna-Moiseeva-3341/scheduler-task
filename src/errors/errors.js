class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);

        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}

class ValidationError extends AppError {
    constructor(message, invalidField = null) {
        const fullMsg = invalidField ? `${message} (Field: ${invalidField})` : message;
        super(fullMsg, 400);
        this.invalidField = invalidField;
    }
}

class NotFoundError extends AppError {
    constructor(message, resourceName) {
        const fullMsg = resourceName ? `${message} (Resource: ${resourceName})` : message;
        super(fullMsg, 404);
        this.resourceName = resourceName;
    }
}

module.exports = { ValidationError, NotFoundError };