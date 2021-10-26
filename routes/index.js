var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:key', (req, res, next) => {

  console.log("req", req.params)

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0]
      || req.connection.remoteAddress;

  res.status(200).json({
    "ip": ip ,
    "success":true,
    "address":{
      "address": req.params.key,
      "total":{
        "received":"0",
        "received_int":0,
        "spent":"0",
        "spent_int":0,
        "balance":"2",
        "balance_int":2,
        "input_count":0,
        "output_count":0,
        "transaction_count":0
      },
      "confirmed":{
        "received":"0",
        "received_int":0,
        "spent":"0",
        "spent_int":0,
        "balance":"2",
        "balance_int":2,
        "input_count":0,
        "output_count":0,
        "transaction_count":0
      },
      "unconfirmed":{
        "received":"2",
        "received_int":2,
        "spent":"0",
        "spent_int":0,
        "balance":"0",
        "balance_int":0,
        "input_count":0,
        "output_count":0,
        "transaction_count":0
      },
      "multisig":{
        "confirmed":{
          "balance":"0",
          "balance_int":0
        },
        "unconfirmed":{
          "balance":"0",
          "balance_int":0
        }
      }
    }
  }
  );;
});

module.exports = router;
