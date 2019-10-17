const path = require('path');

// this gives us the pathname to our file that boots up our program: 'app.js' in the root folder
module.exports = path.dirname(process.mainModule.filename);