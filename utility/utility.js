import request from 'supertest';

export async function createToken(url, username, password) {
  let credentials = {
    username,
    password,
  };

  const response = await request(url)
    .post('/auth')
    .set('Accept', 'application/json')
    .send(credentials);

  return response.body.token;
}

export async function createBooking(url, data) {
  const response = await request(url)
    .post('/booking')
    .set('Accept', 'application/json')
    .send(data);

  return response.body.bookingid;
}
