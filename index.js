 
const express = require('express')
const app = express()
const car = require('./routes/car')
const os = require('os');
const port = process.env.PORT || 3000;
app.use(express.json())
app.use('/api/cars/', car)
 
app.listen(port, () => {
    const threadCount = os.cpus().length -1;
    console.log('\x1b[36m%s\x1b[0m', `Listening in port: ${port}`);
    console.log('\x1b[1;34m------------------------------\x1b[0m');
    console.log('\x1b[1;34m Runing on ' + os.platform() + ' ' + os.arch() + '\x1b[0m');
    console.log('\x1b[1;34m Spinig up ' + threadCount + ' workers\x1b[0m');
    console.log('\x1b[1;34m------------------------------\x1b[0m');
    });