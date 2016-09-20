var WarpServer = require('warp-server');
var path = require('path');

module.exports = new WarpServer({
    security: {
        apiKey: process.env.API_KEY || '__apiKey__',
        masterKey: process.env.MASTER_KEY || '__masterKey__'
    },
    database: {
        host: process.env.DB_HOST || '__dbHost__',
        port: process.env.DB_PORT || __dbPort__,
        user: process.env.DB_USER || '__dbUser__',
        password: process.env.DB_PASSWORD || '__dbPassword__',
        default: process.env.DB_DEFAULT || '__dbDefault__'
    },
    models: {
        source: path.join(__dirname, 'models'),
        user: 'user',
        session: 'session'
    },
    migrations: {
        activated: true
    },
    storage: {
        path: path.join(__dirname, '../../public/storage')
        // options: -- you can opt to use a different storage service --
        // adapter: -- you can opt to use a different storage service --
    },
    functions: {
        source: path.join(__dirname, 'functions')
    },
    queues: {
        activated: true,
        source: path.join(__dirname, 'queues')
    }
});