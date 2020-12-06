import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: express.Application = express();

app.use(logger('dev'));
app.enable('trust proxy');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/api', (req, res) => {
  res.send({ hello: 'world' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
