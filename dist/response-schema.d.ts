export interface JsonPureResponseSchema {
    type: "json-pure.response";
    action_str: "create" | "retrieve" | "update" | "delete";
    action_result: boolean;
    data_type: string;
    response_map: {
        [k: string]: string | number | boolean | any[] | Object;
    };
    trans_map?: {
        [k: string]: string;
    };
    log_list: ({
        code_key: 200 | 400 | 401 | 403 | 500;
        code_str: "Ok" | "Bad Request" | "Unauthorized" | "Forbidden" | "Server error";
        level_int: number;
        level_str: "emerg" | "alert" | "crit" | "error" | "warn" | "notice" | "info" | "debug";
        user_msg: string;
    })[];
}
