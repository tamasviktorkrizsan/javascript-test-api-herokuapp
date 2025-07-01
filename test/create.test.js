import 'dotenv/config.js';

import request from 'supertest';

import { expect } from 'chai';

import testData from '../testdata/bookingTestData.json' with { type: 'json' };

describe('Booking API Testing - Create Booking', () => {
  it('Create a booking', async function () {
    const response = await request(process.env.URL)
      .post('/booking')
      .set('Accept', 'application/json')
      .send(testData.originalBookingData);
    expect(response.status).to.equal(200);
    expect(response.headers['server']).to.equal('Heroku');
    expect(typeof response.body.bookingid).to.be.equal('number');
  });
});
