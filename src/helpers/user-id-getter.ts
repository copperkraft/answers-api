import { Request } from 'express';
import { errorConstants } from './error-constants';

export const getIdFromParams: (req: Request) => number = (req: Request) => {
    const id = +req.params['id'];
    if (id) {
        return id; 
    } else {
        throw new Error(errorConstants.invalidId);
    }
};