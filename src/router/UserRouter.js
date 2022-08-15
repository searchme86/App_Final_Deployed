import express from 'express';
import {
  signin,
  signup,
  checkDuplication,
  setNewInfo,
} from '../controllers/UserCrtl';
import auth from '../middleware/auth';

const UserRouter = express.Router();

UserRouter.route('/signup').post(signup);
UserRouter.route('/signin').post(signin);
UserRouter.route('/profile/:nickname').post(checkDuplication);
UserRouter.route('/profile/:nickname/password').patch(auth, setNewInfo);

export default UserRouter;
