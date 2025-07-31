const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;

    const { method, url } = request;
 
    if(url === '/') {
        if(method === 'GET') {
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }))
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else {
        response.statusCode = 400;
        response.end(JSON.stringify({
            message: `Halaman tidak ditemukan!`,
        }));
    }
};

// curl -X PUT http://localhost:5000/about
/* Output :
{"message":"Halo! Ini adalah halaman about"}
*/

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});