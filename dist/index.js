"use strict";
var ajv = require("ajv");
var _ = require("lodash");
var requestSchema = require('../assets/request-schema.json');
var responseSchema = require('../assets/response-schema.json');
function validateRequest(json) {
    try {
        var validate = ajv().compile(requestSchema);
        var valid = validate(json);
        if (valid) {
            return null;
        }
        return _.map(validate.errors, function (error) { return error.message ? error.message : error.keyword; });
    }
    catch (e) {
        return ["Json-pure request schema validator exception: " + e];
    }
}
exports.validateRequest = validateRequest;
function validateResponse(json) {
    try {
        var validate = ajv().compile(responseSchema);
        var valid = validate(json);
        if (valid) {
            return null;
        }
        return _.map(validate.errors, function (error) { return error.message ? error.message : error.keyword; });
    }
    catch (e) {
        return ["Json-pure response schema validator exception: " + e];
    }
}
exports.validateResponse = validateResponse;
