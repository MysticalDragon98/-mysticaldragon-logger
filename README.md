# @mysticaldragon/logger

Beautiful logs without making a mess.
Organize your logs by class names, hide the logs you won't need and send the important data to specific log files.

- [x] Beautiful logs with timestamp and classes
- [x] Pipe logs to files based on classes

```js
const Logger = require('@mysticaldragon/logger');
const { log } = new Logger();

log("MAIN", "Hello world!");	
```
![Hello World!](https://i.ibb.co/0mxskz9/Sin-t-tulo.png)

Show, hide and pipe logs to files based on filters

```js
const Logger = require('@mysticaldragon/logger');
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
