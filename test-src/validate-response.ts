import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as should from "should";
import * as request from "supertest";
import * as jsonpure from '../src';

@suite("ValidateResponse")
class ValidateResponse {
    
    @test "Valid json-pure response" (done: Function) {
        const log: jsonpure.Log = {
            code_key: 200,
            code_str: "Ok",
            level_int: 6,
            level_str: "info",
            user_msg: ""
        }
        const request: jsonpure.JsonPureResponseSchema = {
            type: "json-pure.response",
            action_result: true,
            action_str: "retrieve",
            data_type: 'test',
            response_map: {},
            log_list: [log]
        };
        jsonpure.validateResponse(request)
            .then((errors) => {
                should.equal(errors, null);
                done();
            })
            .catch((err) => {
                throw err;
            });
    }

}