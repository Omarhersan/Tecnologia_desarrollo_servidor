import User from '../models/user';
import DocumentDefinition from 'mongoose';
import { I_UserDocument } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import e from 'express';

export async function login(user: I_UserDocument){
    try{
        const foundUser = await User.findOne({
            email: user.email
        });
        if(!foundUser){
            throw new Error("User not found");
        }
        const isMatch = bcrypt.compareSync(user.password, foundUser.password);

        if(isMatch){
            const token = jwt.sign({
                _id: foundUser._id?.toString(),
                email: foundUser.email
            }, process.env.JWT_SECRET as string, {
                expiresIn: '2 days'
            });
            return {user: user, token: token};
        }
        else{
            throw new Error("Invalid password");
        }
    }
    catch(e){
        console.log("Error: ", e);}
};