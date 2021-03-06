//if the command is typed to the bot, the corresponding intent
//will be triggered by the recognizer
//in basebot, most of the dialogs are triggered by an intent of the exact same name (i.e. sampleDialog)

let commands = [
    { text: 'help', intent: 'help' },
    { text: 'sample', intent: 'sampleDialog' },
    { text: 'login', intent: 'sampleAuthDialog' },
    { text: 'logout', intent: 'logout' },
    { text: 'delete', intent: 'delete' },
    { text: 'locale', intent: 'chooseLocale' },
    { text: 'mongo', intent: 'mongoDataDialog'}
];

module.exports = {
    commands: commands,
    recognize: function (context, callback) {
        let text = context.message.text.toLowerCase();
        let match = commands.find(m => m.text == text);
        let result = {
            entities: [],
            intent: (match ? match.intent : null),
            intents: [],
            score: (match ? 1 : 0)
        };
        callback.call(null, null, result);
    }
};