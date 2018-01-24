import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { signJWT } from '../../helpers/jwt-helper';
import { UserService } from '../../logic/services/user.service';

@injectable()
export class UserController {
    constructor(@inject('UserService') private userService: UserService) { }

    async getById(req: Request, res: Response): Promise<void> {
        const id = +req.params['id'];
        if (id) {
            res.send(JSON.stringify(await this.userService.getById(id)));
        } else {
            res.sendStatus(404);
        }
    }
    
    async getCurrent(req: Request, res: Response): Promise<void> {
        const id = +res.locals['userId'];
        console.log(res.locals['userId']);
        if (id) {
            res.send(JSON.stringify(await this.userService.getById(id)));
        } else {
            res.sendStatus(404);
        }
    }

    async register(req: Request, res: Response): Promise<void> {
        res.send(signJWT((await this.userService.register(req.body)).id));
    }
    
    async authenticate(req: Request, res: Response): Promise<void> {
        res.send(signJWT((await this.userService.authorize(req.body)).id));
    }
}