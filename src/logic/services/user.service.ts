import { UserRepository } from '../../data/repositories/interfaces/user.repository';
import { inject, injectable } from 'inversify';
import { UserAttribute } from '../../data/models/user';
import { Encryption } from '../../helpers/encryption-helper';
import { User } from '../models/user';

@injectable()
export class UserService {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }
    
    async authorize(credentials: {email: string, password: string}): Promise<UserAttribute> {
        const user = await this.userRepository.findOne({
            where: {
                email: credentials.email
            }
        });
        if (user) {
            if (Encryption.check(credentials.password, user.salt, user.password)) {
                return new User(user);
            } else {
                throw new Error('wrong password');
            }
        } else {
            throw new Error('wrong email');
        }
    }
    
    async register(userData: {email: string, password: string, name: string}): Promise<UserAttribute> {
        const salt = Encryption.generateSalt().toString();
        const user = await this.userRepository.create({
            email: userData.email,
            name: userData.name,
            salt,
            password: Encryption.encrypt(userData.password, salt)
        });
        if (user) {
            return new User(user);
        } else {
            throw new Error('unable to create user');
        }
    }
}