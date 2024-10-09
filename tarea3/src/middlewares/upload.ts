import multer, { diskStorage, FileFilterCallback } from "multer";
import fs from "fs";
import { Request } from "express";

const storage = diskStorage({
    destination: (req, files, cb) => {
        cb(null, 'public/docs');
    },
    filename: (req, files, cb) => {
        const ext = files.originalname.split('.').pop();
        const timestapm = new Date().getTime();
        cb(null, `${files.originalname.split('.')[0]}-${timestapm.toString()}.${ext}`);
        
    },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback)=>{
    const flag = file.mimetype === 'application/pdf';
    cb(null, flag);
};



const upload = multer({ storage: storage , fileFilter: fileFilter});
export default upload;



