import { inject, injectable } from 'inversify';
import { getIdFromParams } from '../../helpers/user-id-getter';
import { TagService } from '../../logic/services/tag.service';
import { Request, Response } from 'express';

@injectable()
export class TagController {
    constructor(@inject('TagService') private tagService: TagService) { }
    
    async getAll(req: Request, res: Response): Promise<void> {
        res.send(JSON.stringify(await this.tagService.getTags()));
    }
    
    async getById(req: Request, res: Response): Promise<void> {
        const id = getIdFromParams(req);
        res.send(JSON.stringify(await this.tagService.getById(id)));
    }
    
    async create(req: Request, res: Response): Promise<void> {
        res.send(JSON.stringify(await this.tagService.create(req.body)));
    }
    
    async deleteById(req: Request, res: Response): Promise<void> {
        const id = getIdFromParams(req);
        await this.tagService.deleteById(id);
        res.sendStatus(200);
    }
}