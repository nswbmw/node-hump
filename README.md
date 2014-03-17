## node-hump ##

convert a string(like: hello-world) to hump-style string(to: helloWorld)

### Install ###

    npm install hump

### Usage ###

    var hump = require('hump');
    console.log(hump("hello-world", "-"))
    // => helloWorld

    console.log(hump("hello_world", "_"))
    // => helloWorld

### License ###

MIT