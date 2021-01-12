
const auth = require('../app/controllers/auth');
const authmiddleware = require('../app/middleware/auth');

module.exports = (app) => {


//auth
app.post('/signin', auth.signIn);
app.post('/refresh-token',auth.refreshTokens);

app.post('/createuser',auth.create);
};