
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const registerNotUserHome = require("./components/notifications/register.js");
const notification = require("./components/notifications/notification.js");

admin.initializeApp(functions.config().firebase);

exports.notification = functions.database.ref('/hogares/{idHogar}/movHabitacion').onWrite(notification.handler);

exports.registerNotification = functions.database.ref('/usersHome/{idUser}').onWrite(registerNotUserHome.handler);
