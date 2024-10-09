import { Router } from 'express';
import upload from '../middlewares/upload';
import path from 'path';

const router = Router();

router.get('', (req, res) => {
    res.send('Hello World');
});

router.post('/upload',upload.single('file') , (req, res) => {
    console.log('Archivo:', req.file);
    if (req.file){
        res.send('Archivo cargado! : \n ' + req.file);
    }
    else{
        res.status(400).send('Archivo no soportado');
    }
});

router.post('/uploads', upload.array('files'), (req, res) => {
    if (req.files){
        res.send(`Archivos cargados!`);
    }
    else{
        res.status(400).send('Error al subir archivos');
    }
})

router.get('/download', (req, res) => {
    const file = req.query.file;
    if (file){
        res.download(path.join(__dirname, '..','..', 'public/docs', `${file}`));
    }
    else{
        res.status(404).send('Archivo no encontrado');
    }
});

export default router;