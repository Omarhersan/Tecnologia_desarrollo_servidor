import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User, {userSchema} from "../models/user";
import { NextFunction } from "express";

const seed = 23;
userSchema('save', async function(next: NextFunction){
    if(User.isModified('password')){
        User.password = await bcrypt.hash(User.password, seed);
    }
    next();
});

