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
            return `Welcome ${username}`;
        },

        // curl -X POST -H "Content-Type: application/json" http://localhost:5000/login -d "{\"username\": \"Rama Jiansyah\", \"password\": \"123\"}"
        // Output: Welcome Rama Jiansyah
    }
]

module.exports = routes;