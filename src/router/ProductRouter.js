import express from 'express';
import {
  uploadProduct,
  getRelatedProducts,
  getProduct,
  getProducts,
  getProductByUser,
  deleteProduct,
  pullProducts,
  getProductByCategory,
  searchProduct,
  editProduct,
} from '../controllers/ProductCtrl';

import auth from '../middleware/auth';

const ProductRouter = express.Router();

ProductRouter.route('/list').get(pullProducts);
ProductRouter.route('/upload').post(auth, uploadProduct);
ProductRouter.route('/relatedProducts').post(getRelatedProducts);

ProductRouter.route('/user/:id').get(auth, getProductByUser);
ProductRouter.route('/user/:id').delete(auth, deleteProduct);

ProductRouter.route('/search').get(searchProduct);
ProductRouter.route('/category/:id').get(getProductByCategory);
ProductRouter.route('/').get(getProducts);
ProductRouter.route('/:id').get(getProduct);
ProductRouter.route('/edit/:id').post(auth, editProduct);

export default ProductRouter;
