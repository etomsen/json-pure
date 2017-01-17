import * as ajv from "ajv";
import { JsonPureRequestSchema } from "./request-schema";
import { JsonPureResponseSchema } from "./response-schema";

var requestSchema = require('./request-schema.json');
var responseSchema = require('./sesponse-schema.json');

export * from "./request-schema";
export * from "./response-schema";

export function validateRequest(json: any): Promise<{jsonpure: JsonPureRequestSchema}> {
	return new Promise((resolve, reject) => {
		try {
			let validate = ajv().compile(requestSchema);
			if (validate(json)) {
				resolve({"jsonpure": json});
    		} else {
    			reject();
    		}
		}
		catch (e) {
			reject();
		}
	});
}

export function validateResponse(json: any): Promise<{jsonpure: JsonPureResponseSchema}> {
	return new Promise((resolve, reject) => {
		try {
			let validate = ajv().compile(responseSchema);
			if (validate(json)) {
				resolve({"jsonpure": json});
    		} else {
    			reject();
    		}
		}
		catch (e) {
			reject();
		}
	});
}