import './env';
import { connectToDB } from './db';

import './models/User';
import './models/Product';
import './models/Category';

import app from './server';

const PORT = process.env.PORT || 4000;
const handleListening = () => {
  console.log(`server is listening on ${PORT}`);
};

connectToDB((err) => {
  if (!err) {
    app.listen(PORT, handleListening);
  }
});
