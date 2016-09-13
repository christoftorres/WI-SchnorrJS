#!/usr/bin/env node

/** 
  -- main.js -- 
  Author : Christof Torres <christof.ferreira.001@student.uni.lu>
  Date   : September 2016
**/

var colors = require('colors/safe');

console.time('Total Execution Time');

var WISchnorrServer  = require('./WISchnorrServer');
var WISchnorrClient  = require('./WISchnorrClient');

/* Initialise the WI-Schnorr server */
console.time('Server Initialisation');
var server = new WISchnorrServer();
console.timeEnd('Server Initialisation');

/* Generate a WI-Schnorr keypair and extract the public key */
console.time('Key Generation');
var keypair   = server.GenerateSchnorrKeypair("this is a password");
console.timeEnd('Key Generation');

console.time('Public Key Extraction');
var publicKey = server.ExtractPublicKey();
console.timeEnd('Public Key Extraction');

/* Initialise the WI-Schnorr client */
console.time('Client Initialisation');
var client = new WISchnorrClient(publicKey);
console.time('Client Initialisation');

console.time('Signature Generation');
/* Generate WI-Schnorr parameters */   
var info      = "this is a message from the server";
var params    = server.GenerateWISchnorrParams(JSON.stringify(info));

/* Generate WI-Schnorr challenge */
var msg       = "this is a message from the client";
var challenge = client.GenerateWISchnorrClientChallenge(params.public, JSON.stringify(info), JSON.stringify(msg));

/* Generate WI-Schnor response */
var response  = server.GenerateWISchnorrServerResponse(params.private, challenge.e);

/* Generate WI-Schnorr partially blind signature */
var signature = client.GenerateWISchnorrBlindSignature(challenge.t, response);
console.timeEnd('Signature Generation');

/* Verify the signature */
console.time('Signature Verification');
if (client.VerifyWISchnorrBlindSignature(signature, JSON.stringify(info), JSON.stringify(msg))) {
    console.log(colors.green('Singature is valid!'));
} else {
    console.log(colors.red('Singature is not valid!'));
}
console.timeEnd('Signature Verification');

console.timeEnd('Total Execution Time');
