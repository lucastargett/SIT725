const expect = require("chai").expect;
const request = require("request");

describe("Submit Surf Form API", function () {
    const baseUrl = "http://localhost:3000";

    it("Should successfully submit a division entry", function (done) {
        request.post({
            url: `${baseUrl}/division/submit`,
            form: {
                division: "Mens",
                firstName: "Lucas",
                lastName: "Targett",
                email: "lucastargett@gmail.com",
                password: "oweno2wqnwqo"
            }
        }, function (err, res, body) {
            expect(res.statusCode).to.equal(201);

            const parsed = JSON.parse(body);
            expect(parsed).to.be.an("object");
            expect(parsed.message).to.equal("Entry submitted");
            expect(parsed.data).to.be.an("object");
            expect(parsed.data.division).to.equal("Mens");
            expect(parsed.data.firstName).to.equal("Lucas");

            done();
        });
    });

});
