import * as crypto from "crypto";

export namespace Encryption {
    export function encrypt(password: string, salt: string): string {
        return crypto.createHmac('sha1', salt)
            .update(password)
            .digest('hex');
    }
    export function check(password: string = '', salt: string = '', hash: string = ''): boolean {
        return encrypt(password, salt) === hash;
    }
    export function generateSalt(): string {
        return crypto.randomBytes(8).toString('hex');
    }
}
