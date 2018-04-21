import { inject, injectable } from 'inversify';
import { getIdFromParams } from '../../helpers/user-id-getter';
import { QuestionService } from '../../logic/services/question.service';
import { Request, Response } from 'express';

@injectable()
export class QuestionController {
    constructor(@inject('QuestionService') private service: QuestionService) { }
    
    async getAll(req: Request, res: Response): Promise<void> {
        res.send(JSON.stringify(await this.service.getQuestions()));
    }
    
    async getById(req: Request, res: Response): Promise<void> {
        res.send(JSON.stringify(await this.service.getById(getIdFromParams(req))));
    }
    
    async create(req: Request, res: Response): Promise<void> {
        console.log(res.locals.userId);
        const newPost = await this.service.create(req.body, res.locals.userId, req.body.tags);
        res.send(JSON.stringify(newPost));
    }
    
    async update(req: Request, res: Response): Promise<void> {
        const id = getIdFromParams(req);
        await this.service.update(req.body, id, res.locals.userId);
    }
    
    async deleteById(req: Request, res: Response): Promise<void> {
        const id = getIdFromParams(req);
        await this.service.deleteById(id, res.locals.userId);
        res.sendStatus(200);
    }
}