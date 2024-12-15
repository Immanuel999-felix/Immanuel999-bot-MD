const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID ||
"bR5kQCpT#N4VMlGgx4iiMQlCd0jsDSmDnxBfqrn8PLMHRUoTorZA" ,
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/08rco1.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, Immanuel999-bot-MD is alive now!!🙂",
};
