import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as should from "should";
import * as request from "supertest";
import * as jsonpure from '../src';

@suite("ValidateRequest")
class ValidateRequest {
    
    @test "Valid json-pure request" (done: Function) {
        const request: jsonpure.JsonPureRequestSchema = {
            type: "json-pure.request",
            action_str: "retrieve",
            data_type: 'test',
            request_map: {}
        };
        jsonpure.validateRequest(request)
            .then((errors) => {
                should.equal(errors, null);
                done();
            })
            .catch((err) => {
                throw err;
            });
    }

    @test "Invalid json-pure type" (done: Function) {
        const request = {
            type: "non-json-pure.request",
            action_str: "retrieve",
            data_type: 'test',
            request_map: {}
        };
        jsonpure.validateRequest(request)
            .then((errors) => {
                should.equal(errors, 'should be equal to one of the allowed values');
                done();
            })
            .catch((err) => {
                done();
            });
    }

    @test "Invalid json-pure action-type" (done: Function) {
        const request = {
            type: "json-pure.request",
            action_str: "unknown-action-type",
            data_type: 'test',
            request_map: {}
        };
        jsonpure.validateRequest(request)
            .then((errors) => {
                should.equal(errors, 'should be equal to one of the allowed values');
                done();
            })
            .catch((err) => {
                done();
            });
    }

}