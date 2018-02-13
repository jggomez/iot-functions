
const admin = require("firebase-admin");

exports.handler = (req, resp) => {

    console.log(req.body);

    let action = req.body.queryResult.parameters['action'];
    let homePlace = req.body.queryResult.parameters['homeplace'];
    let fulfillmentText = req.body.queryResult.fulfillmentText;

    console.log(homePlace);
    console.log(action);

    let homePlaceTemp = homePlace.toLowerCase();
    let actionTemp = 1;

    if (homePlaceTemp === "living room") {
        homePlaceTemp = "living";
    }

    if (action.toLowerCase() === "turn off") {
        actionTemp = 0;
    }

    let lightUpdate = {};
    lightUpdate[`home/id123/${homePlaceTemp}`] = actionTemp;

    admin.database()
        .ref()
        .update(lightUpdate)
        .catch(error => {
            console.error(error);
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ 'speech': error, 'displayText': error }));
        });

    console.log(fulfillmentText);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'speech': fulfillmentText, 'displayText': fulfillmentText }));

}