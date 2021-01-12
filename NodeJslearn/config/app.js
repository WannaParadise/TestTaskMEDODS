module.exports = {
    appPort: 3000, 
    mongoUri: 'mongodb://localhost:27017/auth',
    jwt:{
        secret: 'coolboy',
        tokens: {
            access:{
                type: 'JWT',
                expiresIn: '2m',
            },
            refresh: {
                type: 'refresh',
                expiresIn: '3m',
            }
        }
    }
};