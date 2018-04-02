import * as express from 'express';
import { errorConstants } from '../../helpers/error-constants';

export const errorHandler: express.ErrorRequestHandler = (err: Error, req: express.Request, res: express.Response, next: () => any) => {
    if (err) {
        switch (err.message) {
            case errorConstants.invalidId:
            case errorConstants.invalidUserId:
                res.status(404);
                break;
            case errorConstants.unauthorized:
                res.status(401);
                break;
            case errorConstants.invalidCredentials:
                res.status(403);
                break;
            default:
                res.status(500);
        } 
        console.error(err.stack);
        res.send(err.message);
    }
};