import 'dotenv/config.js';
import request from 'supertest';
import { expect } from 'chai';
import testData from '../testdata/bookingTestData.json' with { type: 'json' };
import { createToken, createBooking } from '../utility/utility.js';

describe('Booking API Testing - Update Booking', () => {
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

  it('Update booking', async function () {
    const response = await request(process.env.URL)
      .put('/booking/' + bookingId)
      .set('Accept', 'application/json')
      .set('Cookie', 'token=' + bookingToken)
      .send(testData.updatedBookingData);
    expect(response.status).to.equal(200);
    expect(response.headers['server']).to.equal('Heroku');
    expect(response.body).to.deep.equal(testData.updatedBookingData);
  });
});

/*  .end(async (err, res) => {
        if (err) {
          return err;
        } else {
          expect(200);
          expect('Server', 'Heroku');
          expect(res.body).toEqual(testData.updatedBookingData);
        }
      }); */
