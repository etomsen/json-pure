"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
const requestSchema = require('../assets/request-schema.json');
const responseSchema = require('../assets/response-schema.json');
function loadSchema(uri, cb) {
    try {
        const result = require(`../assets/${uri}`);
        cb(null, result);
    }
    catch (error) {
        cb(new Error(`Unable to load schema '../assets/${uri}'`), null);
    }
}
function createValidateFunction(schema) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const ajv = Ajv({ loadSchema: loadSchema, allErrors: true });
            ajv.compileAsync(schema, (err, validate) => {
                if (err) {
                    reject(err.message);
                }
                else {
                    resolve(validate);
                }
            });
        });
    });
}
function validateRequest(json) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validateFn = yield createValidateFunction(requestSchema);
            if (validateFn(json)) {
                return null;
            }
            return validateFn.errors[0].message;
        }
        catch (e) {
            return 'Json-pure request schema compilation exception';
        }
    });
}
exports.validateRequest = validateRequest;
function validateResponse(json) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validateFn = yield createValidateFunction(responseSchema);
            if (validateFn(json)) {
                return null;
            }
            return validateFn.errors[0].message;
        }
        catch (e) {
            return 'Json-pure response schema compilation exception';
        }
    });
}
exports.validateResponse = validateResponse;
