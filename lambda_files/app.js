
const express = require('express');
const sls = require('serverless-http');
let cw = require('crypto-wallets');
const app = express();


app.get('/*',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  next(); 
});

app.get('/makeWallet',(req,res,next)=>{
  let btcWallet = cw.generateWallet('BTC');
  res.json(btcWallet)
})


module.exports.server = sls(app);