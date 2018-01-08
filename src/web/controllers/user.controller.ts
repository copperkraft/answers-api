import { inject } from 'inversify';
import { UserService } from '../../logic/services/user.service';

export class UserController {
    constructor(@inject('UserService') private userService: UserService) { }
    
    getUsers(): string {
        return '[]';
    }
}