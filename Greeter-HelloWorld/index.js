var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event,context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function(){
        //Executed at the start of the session
        this.emit('LaunchIntent');
    },
    'LaunchIntent': function(){
        this.emit(':ask',"Hello how are you?");
    },

    'HelloIntent':function() {
        this.emit(":tell","I am doing good! Start preparing for your hackathon!");
    }

};
