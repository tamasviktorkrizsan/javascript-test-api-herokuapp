import "dotenv/config.js";

import request from 'supertest';

import testData from '../testdata/bookingTestData.json' with { type: 'json' };


describe('Booking API Testing', () => {

  let bookingId;

  let bookingToken;

  it('Create a token', (done) => {
    request(process.env.URL)
      .post('/auth')
      .set('Accept', 'application/json')
      .send(testData.credentials)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
              
        if (err) {
          return done(err);
        }

        else {

          bookingToken = res.body.token

          return done();
              
        }
            
      });
    
  })


  it('Create a booking', (done) => {
    request(process.env.URL)
      .post('/booking')
      .send(testData.originalBookingData)
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        else {

          bookingId = res.body.bookingid
          return done();
          
        }         
      
      });
    
  })


  it('Get created booking by id', () => {
    request(process.env.URL)
      .get('/booking/' + bookingId)
      .set('Accept', 'application/json')
      .expect('Content-Length', '240')
      .expect(200)
      .then(response => {
        expect(res.body).toEqual(testData.originalBookingData);
      })          
  });
    
   
  it('Update booking', (done) => {
    request(process.env.URL)
      .put('/booking/' + bookingId)
      .set('Accept', 'application/json')
      .set('Cookie','token=' + bookingToken)
      .send(testData.updatedBookingData)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        else {
          return done();
        }
            
    });
  })


  it('Remove booking', (done) => {
    request(process.env.URL)
      .delete('/booking/' + bookingId)
      .set('Accept', 'application/json')
      .set('Cookie','token=' + bookingToken)
      .expect(201)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        else {

          return done();
        }
            
      });
  })

})

