
const express = require('express');
const sls = require('serverless-http');
let cw = require('crypto-wallets');
const app = express();

//Put correct cors before upload to server 
app.get('/*',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  next(); 
});


app.get('/makeWallet',(req,res,next)=>{
  let btcWallet = cw.generateWallet('BTC');
  res.json(btcWallet)
})


module.exports.server = sls(app);