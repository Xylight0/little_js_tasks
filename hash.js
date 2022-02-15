const { createHash } = require("crypto");
const { randomBytes, scryptSync } = require("crypto");
const { createHmac } = require("crypto");
const { createDecipheriv, createCipheriv } = require("crypto");

function hash(input) {
  return createHash("sha256").update(input).digest("hex");
}

const password = "abc123";

const password1Hash = hash(password);
const password2Hash = hash(password);

const match = password1Hash === password2Hash;

console.log(match ? "matching password" : " password does not match"); //Output: matching password
//matching hashes not good especially for passwords
//add some "salt" to mix it up: hash + salt

/* SALT */

function hashSalt(input) {
  const salt = randomBytes(16).toString("hex");
  const saltedHash = scryptSync(input, salt, 64).toString("hex");
  return saltedHash;
}

const password3Hash = hashSalt(password);
const password4Hash = hashSalt(password);

const match2 = password3Hash === password4Hash;
console.log(match2 ? "matching password" : "password does not match"); //Output: matching password

/* HMAC */
//good solution is a private key (JWT)

const key = "super-secret!";
const message = "boo";

const hmac = createHmac("sha256", key).update(message).digest("hex");
console.log(hmac);

const key2 = "other-passwort";

const hmac2 = createHmac("sha256", key2).update(message).digest("hex");
console.log(hmac2); //different key = different output

/* Symmetric Encryption */

const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key3 = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key3), iv);
  let encrypted = cipher.update(text);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}

let output = encrypt("GeeksforGeeks");
console.log(output);
