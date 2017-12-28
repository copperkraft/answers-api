import { BaseSequelizeRepository } from './base.repository';
import { UserAttribute, UserInstance } from 'data/models/user';
import { AnswersAppSchema } from 'data/schema';
import { injectable } from 'inversify';
import { UserRepository } from '../interfaces/user.repository';
import { Encryption } from '../../../helpers/encryption-helper';

@injectable()
export class UserSequelizeRepository extends BaseSequelizeRepository<UserInstance, UserAttribute, AnswersAppSchema> implements UserRepository {
    async authorize(credentials: {email: string, password: string}): Promise<UserAttribute> {
        const user = await this.findOne({
            where: {
                email: credentials.email
            }
        });
        if (user) {
            if (Encryption.check(credentials.password, user.salt, user.password)) {
                return user;
            } else {
                throw new Error('wrong password');
            }
        } else {
            throw new Error('wrong email');
        }
    }
    
    async register(userData: {email: string, password: string, name: string}): Promise<UserAttribute> {
        const salt = Encryption.generateSalt().toString();
        const user = await this.create({
            email: userData.email,
            name: userData.name,
            salt,
            password: Encryption.encrypt(userData.password, salt)
        });
        if (user) {
            return user;
        } else {
            throw new Error('unable to create user');
        }
    }
}