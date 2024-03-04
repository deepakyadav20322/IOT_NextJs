import jwt from 'jsonwebtoken'


export function verifyJwtToken(token) {
    try {
        const secret = process.env.JWT_TOKEN_SECRET;
        const payload = jwt.verify(token, secret);
        return payload;
    } catch (error) {
        // console.error(error);
        return null;
    }
}


// export function signJwtToken(payload, options = {}) {
//     const secret = process.env.JWT_SECRET;
//     const token = jwt.sign(payload, secret, options);
//     return token;
// }