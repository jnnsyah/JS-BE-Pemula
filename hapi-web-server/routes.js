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
    }
]

module.exports = routes;