/**
 * Created by Deep Vyas
 */

/** Create prototype if you need to add data or message in response. Else create object
 ** Start with capital letter in case of prototype and small in case of object
 */
"use strict";

function GenericSuccessMessage() {
    this.code = 200;
    this.status = "success";
}

function GenericFailureMessage() {
    this.code = 400;
    this.status = "failure";
}

function ErrorInQueryingDB() {
    this.code = 500;
    this.status = "failure";
    this.message = "Please try again after some time";
}

function ObjectDoesNotExistInDB() {
    this.code = 200;
    this.status = "not_found";
    this.message = "The queried object does not exist";
}

function AuthenticationFailure() {
    this.code = 401;
    this.status = "failure";
    this.message = "Authentication failed.";
}

function AuthenticationSuccess() {
    this.code = 200;
    this.status = "success";
    this.message = "Authentication successful.";
}


module.exports = {
    // These are prototypes
    GenericSuccessMessage: GenericSuccessMessage,

    GenericFailureMessage: GenericFailureMessage,

    ErrorInQueryingDB: ErrorInQueryingDB,

    ObjectDoesNotExistInDB: ObjectDoesNotExistInDB,

    AuthenticationFailure: AuthenticationFailure,

    AuthenticationSuccess: AuthenticationSuccess,

    tokenNotProvided: {
        code: 403,
        status: "failure",
        message: "Access denied. Token not provided for authentication"
    },

    tokenAuthenticationFailed: {
        code: 403,
        status: "failure",
        message: "Access denied. Failed to authenticate token. Please login once again"
    },

    tokenAuthenticationPassed: {
        code: 200,
        status: "success",
        message: "Access allowed. Token successfully authenticated"
    },

    tokenVerificationPassed: {
        code: 200,
        status: "success",
        message: "token verified"
    },

    tokenVerificationFailed: {
        code: 400,
        status: "failure",
        message: "token is invalid or has expired"
    },

    accessDenied: {
        code: 403,
        status: "failure",
        message: "Access denied. Operation not permitted"
    },

    incorrectPayload: {
        code: 400,
        status: "failure",
        message: "Payload is not correct. It's missing one or more of the required information."
    },

    invalidUserName: {
        code: 400,
        status: "failure",
        message:
            "username incorrect. Enter your registered mobile number/registered email"
    },

    invalidEmail: {
        code: 400,
        status: "failure",
        message: "email incorrect. Enter your registered email"
    },

    operationProhibited: {
        code: 400,
        status: "failure",
        message: "You are prohibited to perform the given operation"
    },

    missingOrBadAuthentication: {
        code: 401,
        status: "failure",
        message: "Missing or bad authentication"
    },

    noDataAvailable: {
        code: 200,
        status: "Success",
        message: "No data is available"
    },

    missingCountry: {
        code: 400,
        status: "failure",
        message: "No such teams/team with the given countries/country exist."
    }

};
