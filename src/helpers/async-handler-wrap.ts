import { NextFunction, Request, RequestHandler, Response } from 'express';

export interface AsyncRequestHandler extends RequestHandler {
    (req: Request, res: Response, next: NextFunction): Promise<any>;
}

export const asyncHandlerWrap: (handler: AsyncRequestHandler) => RequestHandler = (handler: AsyncRequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        handler(req, res, next).catch((error: Error) => next(error));
    };
};