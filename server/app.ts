import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';

import setRoutes from './routes';
import { IClaBotOptions } from './models/clabot';

const app = express();
dotenv.load({ path: '.env' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  setRoutes(app);

  app.listen(process.env.PORT || 3000, () => {
    console.log('Running on port ');
  });

});

export { app };
