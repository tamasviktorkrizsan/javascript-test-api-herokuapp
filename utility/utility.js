import request from 'supertest';

import { expect } from 'chai';

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

/* 
request(process.env.URL)
      .post('/booking')
      .set('Accept', 'application/json')
      .send(testData.originalBookingData)
      .expect('Server', 'Heroku')
      .expect(typeof body.bookingId).to.be.equal('number')
      .expect(200, done);
 */

/* 
  console.log(url);

  console.log(data);
  
  request(url)
    .post('/booking')
    .set('Accept', 'application/json')
    .send(data)
    .expect(200)
    .expect(function(res){
        
      let bookingId = res.body.bookingid;

      return bookingId; */
