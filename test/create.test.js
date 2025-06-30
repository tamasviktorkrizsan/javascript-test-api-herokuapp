import "dotenv/config.js";

import request from 'supertest';

import testData from '../testdata/bookingTestData.json' with { type: 'json' };

import { createToken } from '../utility/utility.js';


describe('Booking API Testing - Create Booking', () => {

  let bookingId;

  let bookingToken;


  beforeEach( async () => {

  bookingToken = createToken(process.env.USR, process.env.PASSWORD);

  })


  it('Create a booking', async () => {
    request(process.env.URL)
      .post('/booking')
      .send(testData.originalBookingData)
      .set('Accept', 'application/json')
      .expect(200)
      .end(async (err, res) => {
        if (err) {
          return err;
        }

        else {

          bookingId = await res.body.bookingid;
          
        }         
      
      });
    
  })


 

})

