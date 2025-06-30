import "dotenv/config.js";

import request from 'supertest';

import testData from '../testdata/bookingTestData.json' with { type: 'json' };

import { createToken, createBooking } from "../utility/utility.js";


describe('Booking API Testing - Delete Booking', () => {

  let bookingId;

  let bookingToken;

  beforeEach( async () => {

    bookingToken = createToken(process.env.USR, process.env.PASSWORD);
   
    bookingId = createBooking(testData.originalBookingData)

  })
   
  
  it('Remove booking', async () => {
    request(process.env.URL)
      .delete('/booking/' + bookingId)
      .set('Accept', 'application/json')
      .set('Cookie','token=' + bookingToken)
      .expect(201)
      .end(async (err, res) => {
        if (err) {
          return err;
        }

        else {

          return res;
        }
            
      });
  })

})

