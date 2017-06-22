import { LogCodeKey } from './log-code-key.gen';
import { LogCodeStr } from './log-code-str.gen';
import { LogLevel } from './log-level.gen';
export interface Log {
    code_key: LogCodeKey;
    code_str: LogCodeStr;
    level_int: number;
    level_str: LogLevel;
    user_msg: string;
}
