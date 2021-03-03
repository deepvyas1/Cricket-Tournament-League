/**
 * Created by Deep Vyas
 */

'use strict';

function getMongoDatabaseUrls() {
    let mongoMainUrl;
    const mongoMainHosts = eval(mongoMainHost);

    if (ENVIRONMENT === 'production') {
        mongoMainUrl = `mongodb+srv://${mongoMainUser}:${mongoMainPass}@${mongoMainHosts.join()}/${mongoMainDB}?retryWrites=true&w=majority`;
    } else {
        // mongoMainUrl = `mongodb+srv://${mongoMainUser}:${mongoMainPass}@${mongoMainHosts.join()}/${mongoMainDB}?retryWrites=true&w=majority`;
       // mongoMainUrl = `mongodb://${mongoMainHosts.join()}/${mongoMainDB}`;
       mongoMainUrl = "mongodb://localhost/cricketLeague";
    }
    return { mongoMainUrl };
}

let { mongoMainUrl } = getMongoDatabaseUrls();

module.exports = {
    mongoMainUrl: mongoMainUrl
};
