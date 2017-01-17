import { JsonPureRequestSchema } from "./request-schema";
import { JsonPureResponseSchema } from "./response-schema";
export * from "./request-schema";
export * from "./response-schema";
export declare function validateRequest(json: any): Promise<{
    jsonpure: JsonPureRequestSchema;
}>;
export declare function validateResponse(json: any): Promise<{
    jsonpure: JsonPureResponseSchema;
}>;
