import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/assets/images', express.static(path.join(__dirname, '..', 'public/images')));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});