import * as Ajv from "ajv";
import * as _map from "lodash.map";

const requestSchema = require('../assets/request-schema.json');
const responseSchema = require('../assets/response-schema.json');

export * from "./request-schema.gen";
export * from "./response-schema.gen";
export * from "./action-type.gen";
export * from "./log-code-key.gen";
export * from "./log-code-str.gen";
export * from "./log-level.gen";
export * from "./log.gen";
export * from "./request-type.gen";
export * from "./response-type.gen";

function loadSchema(uri: string, cb: (err: Error, schema: Object) => any) {
    try {
        const result = require(`../assets/${uri}`);
        cb(null, result);
    } catch (error) {
        cb(new Error(`Unable to load schema '../assets/${uri}'`), null);
    }
}

async function createValidateFunction(schema): Promise<Ajv.ValidateFunction>{
    return new Promise<Ajv.ValidateFunction>((resolve, reject) => {
        const ajv = Ajv({loadSchema: loadSchema, allErrors: true})
        ajv.compileAsync(schema, (err, validate) => {
            if (err){
                reject(err.message);
            } else {
                resolve(validate);
            }
        })
    });
}

export async function validateRequest(json: any): Promise<string | null> {
    try {
        const validateFn = await createValidateFunction(requestSchema);
        if (validateFn(json)) {
            return null;
        }
        return validateFn.errors[0].message;
    }
    catch (e) {
        return 'Json-pure request schema compilation exception'
    }
}

export async function validateResponse(json: any): Promise<string | null> {
   try {
        const validateFn = await createValidateFunction(responseSchema);
        if (validateFn(json)) {
            return null;
        }
        return validateFn.errors[0].message;
    }
    catch (e) {
        return 'Json-pure response schema compilation exception'
    }
}