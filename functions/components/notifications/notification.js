const admin = require("firebase-admin");

exports.handler = (event) => {

    console.log("movhabitacion");
    console.log(event.params.idHome);
    console.log(event.data.val());

    // Notification details.
    const payload = {
        notification: {
            title: 'There is a strange movement at the room',
            body: `The room's motion sensor has been activated`
        }
    };

    admin.messaging().sendToTopic(event.params.idHome, payload)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.error(error);
        });


};