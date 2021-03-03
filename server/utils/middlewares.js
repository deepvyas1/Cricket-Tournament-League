"use strict"

const jwt = require("jsonwebtoken");
const responseMessage = require("./responseMessage");
module.exports = { 
 
// route middleware to make sure an api call is coming from authenticated user
isUserJWTAuthenticated: function (req, res, next) {
    // check header or url parameters or post parameters for token
    const requestUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(("Inside JWT authentication process for: " + requestUrl));

    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        console.log(("Inside JWT authentication token decoding process for: " + requestUrl));
        try {
            jwt.verify(token, jwtAppSecret, function (err, decoded) {
                if (err) {
                    console.log("ERROR ::: JWT authentication process failed for: " + requestUrl +
                        " " + JSON.stringify(err));

                    return res.status(responseMessage.missingOrBadAuthentication.code)
                        .send(responseMessage.missingOrBadAuthentication);
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } catch (error) {
            console.log(("ERROR ::: JWT authentication token decoding process failed with error: " + JSON.stringify(error)));
            return res.status(responseMessage.missingOrBadAuthentication.code)
                .send(responseMessage.missingOrBadAuthentication);
        }
    } else {
        // if there is no token return an error
        console.log("ERROR ::: JWT authentication process failed for: " + requestUrl);
        console.log("ERROR ::: Access Denied. Token not found in the request");
        return res.status(responseMessage.missingOrBadAuthentication.code)
            .send(responseMessage.missingOrBadAuthentication);
    }
},
};
