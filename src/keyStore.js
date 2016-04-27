

var bunyan = require('bunyan');

var logger = bunyan.createLogger({name: "cryptoserver.keyStore"});

var keyItems = {};

function createInstance() {
   var that = {
      put: function (user, keyName, key) {
         logger.info('put', keyName);
         keyItems[keyName] = {
            timestamp: new Date().getTime(),
            keyName: keyName,
            key: key
         };
      },
      get: function (user, keyName) {
         return keyItems[keyName];
      },
      clear: function (user, keyName) {
         if (keyItems.hasOwnProperty(keyName)) {
            keyItems[keyName] = undefined;
         }
      }
   };
   return that;
}

module.exports = createInstance();
