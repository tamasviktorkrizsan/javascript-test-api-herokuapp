import 'dotenv/config.js';

import request from 'supertest';

import testData from '../testdata/bookingTestData.json' with { type: 'json' };

import { createToken } from '../utility/utility.js';

describe('Booking API Testing - Create Booking', () => {
  let bookingId;

  let bookingToken;

  beforeEach(async () => {
    bookingToken = createToken(process.env.URL, process.env.USR, process.env.PASSWORD);
  });

  it('Create a booking', async () => {
    request(process.env.URL)
      .post('/booking')
      .set('Accept', 'application/json')
      .send(testData.originalBookingData)
      .end(async (err) => {
        if (err) {
          return err;
        } else {
          bookingId = await res.body.bookingid;
        }
        expect(200);
        expect('Server', 'Heroku');
        expect(typeof res.body.bookingId).to.be.equal('number');
      });
  });
});
