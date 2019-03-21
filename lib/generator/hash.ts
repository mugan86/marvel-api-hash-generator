const md5Js = require( "md5.js");

export function getApiHash(timestamp: number, privateKey: string, publicKey: string) {
    return new md5Js().update(`${timestamp}${privateKey}${publicKey}`).digest('hex');
}
