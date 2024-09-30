import jwt, {Secret, JwtPayload} from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS_CODES } from '../types/http_status_codes';

export const SECRET_KEY: Secret = process.env.JWT_SECRET as Secret;


export interface CustomRequest extends Request{
    token: string | JwtPayload;}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if(!token){
            throw new Error("Token not provided");
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;

        next();
    }
    catch(e){
        res.sendStatus(HTTP_STATUS_CODES.AUTHORIZATION_ERROR);
    }
}