import express from 'express';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello ME!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
