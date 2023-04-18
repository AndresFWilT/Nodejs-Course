const http = require('http');

http.createServer((req, res) => {

    /* res.writeHead(200, { 'Content-Type':'application/json' });

    const persona = {
        id: 1,
        nombre: 'Andres',
        apellido: 'Wilchigod'
    } */

    res.write('Hello world');
    res.end();
}).listen(8080);

console.log("Listening on port 8080");