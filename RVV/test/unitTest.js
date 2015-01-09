var assert = require('assert'),
    http = require('http'),
    database = require("../Helpers/ConnectDb");
describe('mongoDb', function () {
    it('should return an object', function (done) {
        if (database !== undefined)
            done();
        else
            throw "don't pass";
    });
    
});

describe('/', function () {
    it('should return 200', function (done) {
        http.get('http://localhost:1337', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});