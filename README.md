# @camilotdex/logger

Beautiful logs without making a mess.

```js
const Logger = require('@camilotdex/logger');
const { log } = new Logger();

log("MAIN", "Hello world!");	
// [Wed, 25 Aug 2021 20:35:35 GMT] | MAIN | Hello World!
```
Show, hide and pipe logs to files based on filters

```js
const Log = require('@camilotdex/logger');
const { log } = new Logger({
	enabled: boolean, // Is logging activated? (Default, true)
	hidden: [{ class: "HIDDEN_LOG" }] // Hide logs based on class, Wildcard: * (Default, [])
	pipe: [{ // Store logs in file
		path: "logs/main.log", // File to write
		filter: { class: "MAIN" }
	}]
})

Logger.log("HIDDEN_LOG", "This message won't be shown.");
Logger.log("MAIN", "This log will be written at logs/main.log.");
```
