import 'dotenv/config.js';

import request from 'supertest';

import { expect } from 'chai';

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

    bookingId = await createBooking(
      process.env.URL,
      testData.originalBookingData
    );
  });

  it('Get created booking by id', async function () {
    const response = await request(process.env.URL)
      .get('/booking/' + bookingId)
      .set('Accept', 'application/json');
    expect(response.headers['server']).to.equal('Heroku');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(testData.originalBookingData);
  });
});
