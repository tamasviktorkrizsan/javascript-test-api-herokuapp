/* const request = require('supertest');
const express = require('express'); */

import request from 'supertest';
/* 
import { express } from 'expresss';

const app = express(); */


/* 
  require('@dotenvx/dotenvx').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiJsonEqual = require('chai-json-equal');
const { expect } = chai;

chai.use(chaiHttp);
chai.use(chaiJsonEqual);
 */







/* 

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  }); */




const server = 'https://restful-booker.herokuapp.com';




describe('Booking API Testing', () => {


let bookingData = {
                            
    "firstname" : "Jqwdwd",
    "lastname" : "Bdwdwqd",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"


            }


let updatedBookingData = {
                            
    "firstname" : "Jqwdwd",
    "lastname" : "Bdwdwqd",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"


            }








let bookingId;

let bookingToken; 


 it('Create a token', (done) => {
        request(server)
            .post('/auth')
            .set('Accept', 'application/json')
            .send({ 

            "username" : "admin",
            "password" : "password123"

            })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                else {

                bookingToken = res.body.token

                return done();
                }
            
            });
    
    })




  it('Create a booking', (done) => {
        request(server)
            .post('/booking')
            .send(bookingData)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                else {

                bookingId = res.body.bookingid

                console.log("the booking id is " + bookingId);

                return done();
                }
            
            
            });
    

    })



it('Get created booking by id', () => {
        request(server)
            .get('/booking/' + bookingId)
            .set('Accept', 'application/json')
            .expect(200)
.then(response => {

expect(res.body).toEqual(bookingData);

})


            
            
            
            });
    
   





  it('Update booking', (done) => {
        request(server)
            .put('/booking/' + bookingId)
            .set('Accept', 'application/json')
            .set('Cookie','token=' + bookingToken)
            .send(updatedBookingData)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                else {

                return done();
                }
            
            
            });
    

    })















  it('Remove booking', (done) => {
        request(server)
            .delete('/booking/' + bookingId)
            .set('Accept', 'application/json')
            .set('Cookie','token=' + bookingToken)
            .expect(201)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                else {

                return done();
                }
            
            });
    
    })






















})

