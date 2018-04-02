import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { signJWT } from '../../helpers/jwt-helper';
import { getIdFromParams } from '../../helpers/user-id-getter';
import { UserService } from '../../logic/services/user.service';

@injectable()
export class UserController {
    constructor(@inject('UserService') private userService: UserService) { }

    async getById(req: Request, res: Response): Promise<void> {
        const id = getIdFromParams(req);
        res.send(JSON.stringify(await this.userService.getById(id)));
    }
    
    async getCurrent(req: Request, res: Response): Promise<void> {
        const id = +res.locals['userId'];
        res.send(JSON.stringify(await this.userService.getById(id)));
    }

    async register(req: Request, res: Response): Promise<void> {
        res.send(signJWT((await this.userService.register(req.body)).id));
    }
    
    async authenticate(req: Request, res: Response): Promise<void> {
        res.send(signJWT((await this.userService.authorize(req.body)).id));
    }
}