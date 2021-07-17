/* eslint-disable */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JDY3tAwiux7akSrIcpcji0VRmcG44TKN4HbHU0edg237vN0sBr6Z8Z4WW8laz8Pr1qpb1d7msXjcx4JU25wfBHm00Kua2rdTO')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
});

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-a54f6/us-central1/api