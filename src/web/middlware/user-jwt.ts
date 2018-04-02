import { Request, Response, NextFunction, RequestHandler } from 'express';
import { verifyJWT } from '../../helpers/jwt-helper';

export const userJwt: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const jwtHeader = req.get('jwt');
    if (jwtHeader) {
        try {
            res.locals.userId = verifyJWT(jwtHeader);
        } catch (error) {
            res.sendStatus(403);
        }
    }
    next();
};
