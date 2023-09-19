import express from 'express';
import { PORT, mongodbURL } from '../backend/config.js';
import mongoose from 'mongoose';
const app = express();

app.get('/', (req, res) => {
  return res.status(233).send(` saluy`);
});

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
