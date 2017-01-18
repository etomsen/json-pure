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
    /**
     * HTTP Code
     */
    code_key: 200 | 400 | 401 | 403 | 500;
    /**
     * HTTP Code String
     */
    code_str: "Ok" | "Bad Request" | "Unauthorized" | "Forbidden" | "Server error";
    /**
     * Log level int according to syslog
     */
    level_int: number;
    /**
     * Log level strings according to syslog
     */
    level_str: "emerg" | "alert" | "crit" | "error" | "warn" | "notice" | "info" | "debug";
    /**
     * user message
     */
    user_msg: string;
  })[];
}