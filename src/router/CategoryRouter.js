import express from 'express';
import {
  createCategory,
  deleteCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
} from '../controllers/CategoryCtrl';

const CategoryRouter = express.Router();

//카테고리 정보를 생성하는 컨트롤러
CategoryRouter.route('/upload').post(createCategory);

//카테고리 정보를 모두 가져오는 컨트롤러
CategoryRouter.route('/list').get(getCategories);

//특정 id에 해당하는 카테고리를 가져옴
CategoryRouter.route('/:id').get(getSingleCategory);

//해당 id의 카테고리를 지우는 컨트롤러
CategoryRouter.route('/:id').delete(deleteCategory);

//해당 id의 카테고리를 업데이트하는 컨트롤러
CategoryRouter.route('/:id').patch(updateCategory);

export default CategoryRouter;
