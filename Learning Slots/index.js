var Alexa = require('alexa-sdk');

exports.handler = function(event,context,callback){
    var alexa = Alexa.handler(event,context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function(){
        this.emit("LaunchIntent");
    },
    'LaunchIntent': function(){
        this.emit(":ask","What is your weight ?");
    },
    'NumberIntent': function(){
        var slot = this.event.request.intent.slots;
        var myNumber = slot.myNumber.value;
        this.emit(":tell","Your weight is "+ myNumber);
    }

}
