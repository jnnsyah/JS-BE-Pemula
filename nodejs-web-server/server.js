const http = require('http');

const requestListener = (request, response) => {
    let body = [];

    request.on('data', (chunk) => {
        body.push(chunk);
    });

    request.on('end', () => {
        body = Buffer.concat(body).toString();
        const {name} = JSON.parse(body); // memisahkan data properti name
        const {another} = JSON.parse(body); // memisahkan data properti another
        response.end(`<h1>Hi ${name} ${another}</h1>`)
    });
};

// curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Jiansyah\", \"another\": \"Informatika\"}"
// Output : <h1>Hi Jiansyah Informatika</h1>

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});