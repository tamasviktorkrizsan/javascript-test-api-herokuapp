import 'dotenv/config.js';

import request from 'supertest';

import { expect } from 'chai';

import testData from '../testdata/bookingTestData.json' with { type: 'json' };

import { createToken, createBooking } from '../utility/utility.js';

describe('Booking API Testing - Delete Booking', () => {
  let bookingId;

  let bookingToken;

  beforeEach(async () => {
    bookingToken = await createToken(
      process.env.URL,
      process.env.USR,
      process.env.PASSWORD

    );

    
    bookingId = await createBooking(
      process.env.URL,
      testData.originalBookingData
    );
  });

  it('Remove booking', async () => {
    const response = await request(process.env.URL)
      .delete('/booking/' + bookingId)
      .set('Accept', 'application/json')
      .set('Cookie', 'token=' + bookingToken);

    expect(response.status).to.equal(201);
    expect(response.headers['server']).to.equal('Heroku');
  });
});
