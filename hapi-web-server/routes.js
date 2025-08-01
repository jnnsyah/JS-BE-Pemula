const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: '*',
        path: `/{any*}`,
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    {
        // Path Parameters
        method: 'GET',
        path: `/user/{username?}`,
        // tanda tanya (?) mengartikan paramnya opsional
        handler: (request, h) => {
            // Memberikan nilai default
            const {username = "stranger"} = request.params;
            return `Hi, ${username}!`;
        }

        // curl -X GET http://localhost:500/user/Jian
        // Output : Hi, Nitak!
    },
    {
        // Query Parameters
        method: 'GET',
        path: `/hello/{name?}`,
        handler: (request, h) => {
            const {name = "stranger"} = request.params;
            // Menangkap request query 'lang'
            const {lang} = request.query;

            if(lang === 'id') {
                return `Hai, ${name}`;
            }

            return `Hello, ${name}!`;
        },

        // curl -X GET http://localhost:5000/hello/dicoding?lang=id
        // output: Hai, dicoding!
        // curl -X GET http://localhost:5000/hello/dicoding
        // output: Hello, dicoding!
    },
    {
        // Body/Payload Request
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return h.response(`Welcome ${username}`)
                .type('text/plain')
                .header('Flag', 'This is the flag');
        },

        // curl -X POST -H "Content-Type: application/json" http://localhost:5000/login -d "{\"username\": \"Rama Jiansyah\", \"password\": \"123\"}" -i
        /* Output :
        HTTP/1.1 200 OK
        content-type: text/html; charset=utf-8
        cache-control: no-cache
        content-length: 21
        Date: Fri, 01 Aug 2025 06:12:43 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5

        Welcome Rama Jiansyah
        */
    }
]

module.exports = routes;