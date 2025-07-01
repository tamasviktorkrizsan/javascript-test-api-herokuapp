import request from 'supertest';

export function createToken(url, username, password) {
  let credentials = {};

  credentials.username = username;

  credentials.password = password;

  request(url)
    .post('/auth')
    .set('Accept', 'application/json')
    .send(credentials)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(async (err, res) => {
      if (err) {
        return err;
      } else {
        return (bookingToken = await res.body.token);
      }
    });
}

export function createBooking(data) {
  request(process.env.URL)
    .post('/booking')
    .send(data.originalBookingData)
    .set('Accept', 'application/json')
    .expect(200)
    .end(async (err, res) => {
      if (err) {
        return err;
      } else {
        return (bookingId = await res.body.bookingid);
      }
    });
}
