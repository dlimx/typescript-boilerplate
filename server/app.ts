import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app: express.Application = express();

app.use(logger('dev'));
app.enable('trust proxy');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello ME!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
