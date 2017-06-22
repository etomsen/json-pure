import { ResponseType } from './response-type.gen';
import { ActionType } from './action-type.gen';
export interface JsonPureResponseSchema {
    type: ResponseType;
    action_str: ActionType;
    action_result: boolean;
    data_type: string;
    response_map: ({
        [k: string]: any;
    } | any[]);
    trans_map?: {
        [k: string]: string;
    };
    log_list: Log[];
}
import { Log } from './log.gen';
