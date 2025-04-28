const expect = require("chai").expect;
const request = require("request");

describe("Project API", function () {
    const baseUrl = "http://localhost:3000";

    it("should return a list of projects", function (done) {
        request.get(`${baseUrl}/api/projects`, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
            const response = JSON.parse(body);
            expect(response).to.be.an("Object");
            expect(response.data).to.be.an("array");
            expect(response.message).to.equal("Success");
            done();
        });
    });
});