import {UserRepository} from '../../data/repositories/interfaces/user.repository';
import {inject, injectable} from 'inversify';
import {UserAttribute} from '../../data/models/user';

@injectable()
export class UserService {
    constructor(@inject('UserRepository') private userRepository: UserRepository) { }
    
    async authorize(credentials: {email: string, password: string}): Promise<UserAttribute> {
        return this.userRepository.authorize(credentials);
    }
    
    async register(userData: {email: string, password: string, name: string}): Promise<UserAttribute> {
        return this.userRepository.register(userData);
    }
}