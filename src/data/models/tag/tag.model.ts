import { TagInstance } from './tag.instance';
import { TagAttribute } from './tag.attribute';
import { DataModel } from '../../helpers/data-model';
import { TagAttributes } from './tag.attributes';

export class TagModel extends DataModel<TagInstance, TagAttribute> {
    constructor() {
        super('Tag', TagAttributes);
    }

    associate(models: {[key: string]: DataModel<any, any>}) {
        this.model.belongsToMany(models['Question'].model, {through: 'TagQuestion'});
    }
}
