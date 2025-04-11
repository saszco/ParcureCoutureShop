import express from 'express';
import { fileURLToPath } from 'url';
import AppRouter from './routes/index.js';
import path from 'path';

const app = express();

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/images', express.static(path.join(__dirname, 'public/images')));

export default app;


