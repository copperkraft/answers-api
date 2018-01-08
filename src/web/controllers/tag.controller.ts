import { inject, injectable } from 'inversify';
import { TagService } from '../../logic/services/tag.service';
import { Request, Response } from 'express';

@injectable()
export class TagController {
    constructor(@inject('TagService') private tagService: TagService) { }
    
    async getAll(req: Request, res: Response): Promise<void> {
        res.send(JSON.stringify(await this.tagService.getTags()));
    }
    
    async getById(req: Request, res: Response): Promise<void> {
        const id = +req.params['id'];
        if (id) {
            res.send(JSON.stringify(await this.tagService.getById(id)));
        } else {
            res.sendStatus(404);
        }
    }
    
    async create(req: Request, res: Response): Promise<void> {
        res.send(JSON.stringify(await this.tagService.create(req.body)));
    }
}