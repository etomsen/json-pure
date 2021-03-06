/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

import {ResponseType} from './response-type.gen'
import {ActionType} from './action-type.gen'
import {LogCodeKey} from './log-code-key.gen'
import {LogCodeStr} from './log-code-str.gen'
import {LogLevel} from './log-level.gen'

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
import {Log} from './log.gen'
