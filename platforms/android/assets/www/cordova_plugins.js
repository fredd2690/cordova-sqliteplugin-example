cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.brodysoft.sqlitePlugin/www/SQLitePlugin.js",
        "id": "com.brodysoft.sqlitePlugin.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/me.rahul.plugins.speechrecognition/www/SpeechRecognition.js",
        "id": "me.rahul.plugins.speechrecognition.SpeechRecognition",
        "clobbers": [
            "window.speechrecognition"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.brodysoft.sqlitePlugin": "1.0.6",
    "me.rahul.plugins.speechrecognition": "0.0.1"
}
// BOTTOM OF METADATA
});