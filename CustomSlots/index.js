var Alexa = require('alexa-sdk');

exports.handler = function(event,context,callback){
    var alexa = Alexa.handler(event,context);
    alexa.registerHandlers(handlers);
    alexa.execute();
}

var handlers = {
    'LaunchRequest': function(){
        this.emit('LaunchIntent');
    },
    'LaunchIntent': function(){
        this.emit(":ask","Hi, What is your language?");
    },
    'LanguageIntent': function(){
        var myLanguage = this.event.request.intent.slots.myLanguage.value;
        this.emit(":tell","Ok. So you speak "+ myLanguage + " also!");
    }
};