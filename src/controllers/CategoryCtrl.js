import mongoose from 'mongoose';
import Category from '../models/Category';

//카테고리 데이터를 생성하는 컨트롤러
export const createCategory = async (req, res) => {
  const { body: categoryData } = req;
  const category = new Category({
    ...categoryData,
    createdAt: new Date().toISOString(),
  });
  try {
    await category.save();
    return res.status(201).json(category);
  } catch (error) {
    return res
      .status(500)
      .json({ message: '카테고리 등록중 에러가 발생했습니다.' });
  }
};

//특정 id에 해당하는 카테고리를 가져옴
export const getSingleCategory = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const singleCategory = await Category.findOne({ _id: id });

    if (!singleCategory) {
      return res
        .status(404)
        .json({ message: '해당 카테고리가 존재하지 않습니다.' });
    }

    return res.status(201).json(singleCategory);
  } catch (error) {
    return res.status(500).json({
      message: 'ID에 해당하는 아이템을 가져오면서 에러가 발생했습니다.',
    });
  }
};

//모든 카테고리를 디비에서 가져옴
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res.status(201).json(categories);
  } catch (error) {
    return res
      .status(500)
      .json({ message: '카테고리 데이터를 가져오면서 에러가 발생했습니다.' });
  }
};

//특정 id에 해당하는 카테고리 삭제
export const deleteCategory = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: `삭제하려는 id${id}에 해당한 상품이 존재하지 않습니다.`,
      });
    }
    await Category.findByIdAndRemove(id);
    return res.status(200).json({ message: 'category deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

//특정 id에 해당하는 카테고리를 업데이트
export const updateCategory = async (req, res) => {
  const {
    params: { id },
    body: { newTitle, newDescription, newLink, newImageDescription, imageFile },
  } = req;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: `id, ${id}에 해당하는 카테고리가 존재하지 않습니다.`,
      });
    }

    const UpdatedCategory = {
      categoryTitle: newTitle,
      categoryDescription: newDescription,
      categoryLink: newLink,
      ImageDescription: newImageDescription,
      imageFile,
      createdAt: new Date().toISOString(),
    };

    await Category.findByIdAndUpdate(id, UpdatedCategory, { new: true });
    return res.status(201).json(UpdatedCategory);
  } catch (error) {
    return res
      .status(500)
      .json({ message: '새로운 데이터로 업데이트 중 에러가 발생했습니다.' });
  }
};
