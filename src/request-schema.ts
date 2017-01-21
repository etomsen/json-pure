export interface JsonPureRequestSchema {
  type: "json-pure.request";
  action_str: "create" | "retrieve" | "update" | "delete";
  data_type: string;
  request_map: Object;
  trans_map?: {
    [k: string]: string;
  };
}