const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiHttp);
// Testing endpoint root
describe('Testing response from path: / ', function () {
  describe('response code:', function () {
    it('responds with status 200', function (done) {
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(err).to.be.null;
          done();
        });
    });
  });

// Testing whether the data returned is in JSON format
  describe('response body:', function () {
    it('responds with json Object', function (done) {
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(res.type, 'application/json');
          expect(err).to.be.null;
          done();
        });
    });
  });

// Testing each JSON object field to ensure they are defined
  describe('response object value(s):', function () {
    it('the json response does not have empty value(s)', function (done) {
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(res.type, 'application/json');
          expect(res.text.message).not.to.be.null;
          expect(err).to.be.null;
          done();
        });
    });
  });
});
// Testing endpoint /version
describe('Testing response from path: /version', function () {
  describe('response code:', function () {
    it('responds with status 200', function (done) {
      chai.request(app)
        .get('/version')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(err).to.be.null;
          done();
        });
    });
  });
  // Testing whether the data returned is in JSON format
  describe('response body:', function () {
    it('responds with json Object', function (done) {
      chai.request(app)
        .get('/version')
        .end(function (err, res) {
          expect(res.type, 'application/json');
          expect(err).to.be.null;
          done();
        });
    });
  });

// Testing each JSON object field to ensure they are defined
  describe('response object value(s):', function () {
    it('the json response does not have empty value(s)', function (done) {
      chai.request(app)
        .get('/version')
        .end(function (err, res) {
          expect(res.type, 'application/json');
          const responseJson = JSON.parse(res.text);
          // Check if the value is not null
          assert.isNotNull(responseJson.myapplication.version);
          assert.isNotNull(responseJson.myapplication.lastcommitsha);
          assert.isNotNull(responseJson.myapplication.description);
          expect(err).to.be.null;
          done();
        });
    });
  })

;});
