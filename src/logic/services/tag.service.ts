import { TagRepository } from '../../data/repositories/interfaces/tag.repository';
import { inject, injectable } from 'inversify';
import { Tag } from '../models/tag';

@injectable()
export class TagService {
    constructor(@inject('TagRepository') private tagRepository: TagRepository) { }
    
    async getTags(): Promise<Tag[]> {
        return await this.tagRepository.findAll();
    }
    
    async getById(id: number): Promise<Tag> {
        return new Tag(await this.tagRepository.getById(id));
    }

    async getByName(name: string): Promise<Tag> {
        return new Tag(await this.tagRepository.findOne({where: {title: name}}));
    }
    
    async create(tag: Tag) {
        return new Tag(await this.tagRepository.create(tag));
    }
    
    async generateTags(): Promise<void> {
        return void await Promise.all(
        ['angular', 'react', 'vue', 'typescript'].map((tag: string) => {
            return this.tagRepository.create({title: tag});
        })
        );
    }
}