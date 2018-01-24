import * as jwt from 'jsonwebtoken';
import * as config from 'config';
import * as fs from 'fs';

const privateKey = fs.readFileSync( config.get('privateKeyFilePath'));
const publicKey = fs.readFileSync( config.get('publicKeyFilePath'));

export const signJWT = (payload: any) => {
    return jwt.sign(payload, privateKey, {algorithm: 'RS256'});
};

export const verifyJWT = (token: string) => {
    return jwt.verify(token, publicKey, {algorithms: ['RS256']});
};