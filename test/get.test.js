import 'dotenv/config.js';

import request from 'supertest';

import testData from '../testdata/bookingTestData.json' with { type: 'json' };

import { createToken, createBooking } from '../utility/utility.js';

describe('Booking API Testing - Get Booking', () => {
  let bookingId;

  let bookingToken;

  beforeEach(async () => {
    bookingToken = createToken(
      process.env.URL,
      process.env.USR,
      process.env.PASSWORD
    );

    bookingId = createBooking(process.env.URL, testData.originalBookingData);
  });

  it('Get created booking by id', () => {
    request(process.env.URL)
      .get('/booking/' + bookingId)
      .set('Accept', 'application/json')
      .expect('Content-Length', '240')
      .expect(200)
      .then((response) => {
        expect('Server', 'Heroku');
        expect(res.body).toEqual(testData.originalBookingData);
      });
  });
});
