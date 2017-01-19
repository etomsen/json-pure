import * as ajv from "ajv";
import * as _ from "lodash";
import { JsonPureRequestSchema } from "./request-schema";
import { JsonPureResponseSchema } from "./response-schema";

var requestSchema = require('../assets/request-schema.json');
var responseSchema = require('../assets/response-schema.json');

export * from "./request-schema";
export * from "./response-schema";

export function validateRequest(json: any): Array<string> | null {
	try {
		let validate = ajv().compile(requestSchema);
		var valid = validate(json);
		if (valid) {
			return null;
		}
		return _.map(validate.errors, (error: ajv.ErrorObject) => {return error.message ? error.message : error.keyword;});
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
		return _.map(validate.errors, (error: ajv.ErrorObject) => {return error.message ? error.message : error.keyword;});
	}
	catch (e) {
		return ["Json-pure response schema validator exception: "+e]
	}
}