export * from "./request-schema";
export * from "./response-schema";
export declare function validateRequest(json: any): Array<string> | null;
export declare function validateResponse(json: any): Array<string> | null;
