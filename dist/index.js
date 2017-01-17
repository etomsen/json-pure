"use strict";
var ajv = require("ajv");
var requestSchema = require('./request-schema.json');
var responseSchema = require('./sesponse-schema.json');
function validateRequest(json) {
    return new Promise(function (resolve, reject) {
        try {
            var validate = ajv().compile(requestSchema);
            if (validate(json)) {
                resolve({ "jsonpure": json });
            }
            else {
                reject();
            }
        }
        catch (e) {
            reject();
        }
    });
}
exports.validateRequest = validateRequest;
function validateResponse(json) {
    return new Promise(function (resolve, reject) {
        try {
            var validate = ajv().compile(responseSchema);
            if (validate(json)) {
                resolve({ "jsonpure": json });
            }
            else {
                reject();
            }
        }
        catch (e) {
            reject();
        }
    });
}
exports.validateResponse = validateResponse;
