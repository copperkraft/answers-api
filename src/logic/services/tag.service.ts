import { TagRepository } from '../../data/repositories/interfaces/tag.repository';
import { inject, injectable } from 'inversify';
import { Tag } from '../models/tag';

@injectable()
export class TagService {
    constructor(@inject('TagRepository') private tagRepository: TagRepository) { }
    
    async getTags(): Promise<Tag[]> {
        const tags = await this.tagRepository.findAll();
        return tags.map(tag => new Tag(tag));
    }
    
    async getById(id: number): Promise<Tag> {
        return new Tag(await this.tagRepository.getById(id));
    }

    async getByName(name: string): Promise<Tag> {
        return new Tag(await this.tagRepository.findOne({where: {title: name}}));
    }
    
    async create(tag: Tag): Promise<Tag> {
        return new Tag(await this.tagRepository.create(tag));
    }

    async deleteById(id: number): Promise<number> {
        return this.tagRepository.remove({id});
    }
}