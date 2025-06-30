import "dotenv/config.js";
import request from 'supertest';
import testData from '../testdata/bookingTestData.json' with { type: 'json' };
import { createToken, createBooking } from "../utility/utility.js";


describe('Booking API Testing - Update Booking', () => {

  let bookingId;

  let bookingToken;


  beforeEach( async () => {

   bookingToken = createToken(process.env.USR, process.env.PASSWORD);
   
   bookingId = createBooking(testData.originalBookingData);

  })
   
  it('Update booking', async () => {

    /* console.log(bookingId);

    console.log(bookingToken); */

    request(process.env.URL)
      .put('/booking/' + bookingId)
      .set('Accept', 'application/json')
      .set('Cookie','token=' + bookingToken)
      .send(testData.updatedBookingData)
      .expect(200)
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

