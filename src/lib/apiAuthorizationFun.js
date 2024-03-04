const { verifyJwtToken } = require("./jwt");


export const validateTokenToAuthApi =(req)=>{
    
    console.log(req.headers);
const accessToken = req.headers.get('Authorization');
console.log(accessToken);
const token = accessToken?.split(' ')[1]
const decodedToken = verifyJwtToken(token);
return {decodedToken,accessToken};
}