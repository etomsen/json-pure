"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajv = require("ajv");
var _map = require("lodash.map");
var requestSchema = require('https://raw.githubusercontent.com/etomsen/json-pure/master/assets/request-schema.json');
var responseSchema = require('https://raw.githubusercontent.com/etomsen/json-pure/master/assets/response-schema.json');
function validateRequest(json) {
    try {
        var validate = ajv().compile(requestSchema);
        var valid = validate(json);
        if (valid) {
            return null;
        }
        return _map(validate.errors, function (error) { return error.message ? error.message : error.keyword; });
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
        return _map(validate.errors, function (error) { return error.message ? error.message : error.keyword; });
    }
    catch (e) {
        return ["Json-pure response schema validator exception: " + e];
    }
}
exports.validateResponse = validateResponse;
