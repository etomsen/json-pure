import { RequestType } from './request-type.gen';
import { ActionType } from './action-type.gen';
export interface JsonPureRequestSchema {
    type: RequestType;
    action_str: ActionType;
    data_type: string;
    request_map: ({
        [k: string]: any;
    } | any[]);
    trans_map?: {
        [k: string]: string;
    };
}
