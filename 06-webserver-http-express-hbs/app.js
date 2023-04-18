const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type':'application/json' });

    const persona = {
        id: 1,
        nombre: 'Andres',
        apellido: 'Wilchigod'
    }

    res.write('404 | Page not found');

    res.end();
}).listen(8080);

console.log("Listening on port 8080");