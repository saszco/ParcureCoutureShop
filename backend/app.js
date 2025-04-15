import express from 'express';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/products', router);

export default app;


