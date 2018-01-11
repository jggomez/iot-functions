const admin = require("firebase-admin");

exports.handler = (event) => {

    console.log("reg Notification");
    console.log(event.data.val());

    let registrationToken = event.data.val().token;
    let topic = event.data.val().home;

    admin.messaging().subscribeToTopic(registrationToken, topic)
        .then(response => {
            console.log("Successfully subscribed to topic:", response);
        })
        .catch(error => {
            console.error("Error subscribing to topic:", error);
        });

};