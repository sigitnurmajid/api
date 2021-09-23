import express, { Request, Response, NextFunction, request } from 'express'
import MoController from './controller/MoController'
import bodyParser from 'body-parser'
import basicAuth from 'express-basic-auth'

const app = express();
const port = 3000;

app.use(bodyParser())

app.use(basicAuth({authorizer : myAuthorizer}))
 
function myAuthorizer(username : string, password : string) {
    const userMatches = basicAuth.safeCompare(username, 'it')
    const passwordMatches = basicAuth.safeCompare(password, 'admin')
 
    return userMatches && passwordMatches
}

app.listen(port, () => {
    console.log(`Your application is running on port ${port}.`);
});

app.get('api/MfgOrderList/getMO', MoController.index);
app.post('api/MfgResult/PostMfgResult',MoController.save)
app.post('/createMo', MoController.store)
app.put('api/MfgProduction/PutMfgProduction', MoController.edit)