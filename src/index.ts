import * as ajv from "ajv";
import * as _map from "lodash.map";

const requestSchema = require('https://raw.githubusercontent.com/etomsen/json-pure/master/assets/request-schema.json');
const responseSchema = require('https://raw.githubusercontent.com/etomsen/json-pure/master/assets/response-schema.json');

export * from "./request-schema.gen";
export * from "./response-schema.gen";
export * from "./action-type.gen";
export * from "./log-code-key.gen";
export * from "./log-code-str.gen";
export * from "./log-level.gen";
export * from "./log.gen";
export * from "./request-type.gen";
export * from "./response-type.gen";

export function validateRequest(json: any): Array<string> | null {
    try {
        let validate = ajv().compile(requestSchema);
        var valid = validate(json);
        if (valid) {
            return null;
        }
        return _map(validate.errors, (error: ajv.ErrorObject) => {return error.message ? error.message : error.keyword;});
    }
    catch (e) {
        return ["Json-pure request schema validator exception: "+e]
    }
}

export function validateResponse(json: any): Array<string> | null {
    try {
        let validate = ajv().compile(responseSchema);
        var valid = validate(json);
        if (valid) {
            return null;
        }
        return _map(validate.errors, (error: ajv.ErrorObject) => {return error.message ? error.message : error.keyword;});
    }
    catch (e) {
        return ["Json-pure response schema validator exception: "+e]
    }
}