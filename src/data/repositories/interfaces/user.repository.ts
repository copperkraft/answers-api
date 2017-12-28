import { BaseRepository } from './base.repository';
import { UserAttribute } from '../../models/user';


export interface UserRepository extends BaseRepository<UserAttribute> {
    
}