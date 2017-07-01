import * as express from 'express';
import UserCtrl from './controllers/user';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const userCtrl = new UserCtrl();


  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/users').get(userCtrl.getAll);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
