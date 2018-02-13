
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const registerNotUserHome = require("./components/notifications/register.js");
const notification = require("./components/notifications/notification.js");
const turnLight = require("./components/manageLight/turnLight.js");

admin.initializeApp(functions.config().firebase);

exports.notification = functions.database.ref('/home/{idHome}/movroom').onWrite(notification.handler);

exports.registerNotification = functions.database.ref('/usersHome/{idUser}').onWrite(registerNotUserHome.handler);

exports.turnLight = functions.https.onRequest(turnLight.handler);
