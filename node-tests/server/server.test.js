const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

//  server
//      // GET /
        // test
        // GET /users
        // test

    describe('Server', () => {


        describe('GET /', () => {
            it('should return hello as a response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect( (res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                }).end(done);
            });
        });
        describe('GET /users', () => {
            it('should return an object with specific properties as a response', (done) => {
                request(app)
                .get('/users')
                .expect(200)
                .expect( (res) => {
                    expect(res.body).toInclude({
                        name: 'Name',
                        age: 20
                    });
                }).end(done);
            });
        });
});

