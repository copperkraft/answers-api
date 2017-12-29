import { BaseRepository } from './base.repository';
import { UserAttribute } from '../../models/user';

export interface UserRepository extends BaseRepository<UserAttribute> {
    authorize(credentials: {email: string, password: string}): Promise<UserAttribute>;
    register(userData: {email: string, password: string, name: string}): Promise<UserAttribute>;
}