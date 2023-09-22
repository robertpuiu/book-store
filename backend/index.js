import express from 'express';
import { PORT, mongodbURL } from '../backend/config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import router from './routes/booksRoute.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(233).send(` saluy`);
});

app.use('/books', router);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log('DB on frate');
    app.listen(PORT, () => {
      console.log('server ON! !');
    });
  })
  .catch((error) => {
    console.log(error);
  });
