import { Request, Response } from 'express';
import User from '../models/user';
import { User as UserType } from '../types/user';
import { HTTP_STATUS_CODES } from '../types/http_status_codes';
import { json } from 'node:stream/consumers';
import loggedIn from '../middlewares/logedIn'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
import {login} from '../services/userServices';

class UsersController{

    async getAll(req: Request, res: Response){
        try {
            const users = await User.find();
            res.send(users);
        }
        catch (e){
            console.log("server error: ", e);
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        }
    }

    async newUser(req:Request, res: Response){
        try{
            await User.create(req.body);
            res.sendStatus(HTTP_STATUS_CODES.SUCCESS);
        }
        catch(e){
            console.log("Error: ", e);
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
        }
    }

    loginOne = async (req: Request, res: Response) => {
        try{
            const foundUser = await login(req.body);
            res.sendStatus(HTTP_STATUS_CODES.SUCCESS);
        }
        catch(e){
            console.log("Error: ", e);
            res.sendStatus(HTTP_STATUS_CODES.SERVER_ERROR);
    }
}




}

const controller = new UsersController();
export default controller;

