const fs = require('fs');
const fake = require('fake-useragent');

const userAgentCount = 1000000;

let userAgents = new Set();

for (let i = 0; i < userAgentCount; i++) {
    const userAgent = fake();
    userAgents.add(userAgent);
}

fs.unlink('ua.txt', (err) => {
    if (err && err.code !== 'ENOENT') throw err;
    
    fs.writeFile('ua.txt', [...userAgents].join('\n'), (err) => {
        if (err) throw err;
        console.log('ua.txt berhasil dibuat dengan 1 juta user agent!');
    });
});
