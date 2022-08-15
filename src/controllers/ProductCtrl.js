import Product from '../models/Product';
import mongoose from 'mongoose';

// 새로 상품을 등록하는 핸들러
export const uploadProduct = async (req, res) => {
  const {
    body: { pdUploaderNickname, pdUploaderImage, productDescription },
    userId,
  } = req;
  try {
    const newProduct = new Product({
      ...productDescription,
      pdUploader: userId,
      pdUploaderNickname,
      pdUploaderImage,
      pdAddress: productDescription?.addressValue,
      createdAt: new Date().toISOString(),
    });
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({
      error: error,
      message: '새로운 상품을 등록 중 에러가 발생했습니다.',
    });
  }
};

// 상품 업데이트 핸들러
export const editProduct = async (req, res) => {
  try {
    const {
      params: { id },
      body: { pdUploaderNickname, pdUploaderImage, productDescription },
    } = req;

    const updatedDraft = {
      pdUploaderNickname,
      pdUploaderImage,
      ...productDescription,
    };

    const whatUserFinds = await Product.findById(id);
    if (!whatUserFinds) {
      return res
        .status(404)
        .json({ message: `${id}에 해당하는 상품이 존재하지 않습니다.` });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: updatedDraft,
      },
      { new: true }
    );

    return res.status(201).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({
      error: error,
      message: '상품을 업데이트 중 에러가 발생했습니다.',
    });
  }
};

// 해당 id의 상품을 가져오는 핸들러
export const getProduct = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const SingleProduct = await Product.findById(id);
    return res.status(201).json(SingleProduct);
  } catch (error) {
    return res.status(500).json({
      message: `${id}에 해당하는 상품을 가져오는 중 에러가 발생했습니다.`,
    });
  }
};

// 카테고리에 해당하는 상품을 가져오는 핸들러
export const getProductByCategory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const categoryItem = await Product.find({ pdCategory: id });

    return res.status(201).json({ categoryItem });
  } catch (error) {
    return res.status(500).json({
      message: '카테고리에 해당하는 상품을 가져오는 중 에러가 발생했습니다.',
    });
  }
};

// 등록 상품을 페이징에 따라 가져오는 핸들러
export const getProducts = async (req, res) => {
  const {
    query: { page },
  } = req;

  try {
    const limit = 8;
    const startIndex = (Number(page) - 1) * limit;
    const total = await Product.countDocuments({});
    const products = await Product.find().limit(limit).skip(startIndex);
    return res.status(201).json({
      data: products,
      currentPage: Number(page),
      totalTours: total,
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: '상품 데이터를 가져오는 중, 에러가 발생했습니다' });
  }
};

// 모든 등록된 상품을 가져오는 핸들러
export const pullProducts = async (req, res) => {
  try {
    const items = await Product.find();
    return res.status(201).json(items);
  } catch (error) {
    return res
      .status(500)
      .json({ message: '상품 데이터를 가져오는 중, 에러가 발생했습니다' });
  }
};

// 키워드(상품브랜드, 상품타입)와 같은 상품을 찾아 가져오는 핸들러
export const getRelatedProducts = async (req, res) => {
  try {
    const {
      body: { Brand, Type },
    } = req;

    const PdBrand = await Product.find({ pdBrand: Brand });
    const PdType = await Product.find({ pdType: Type });

    return res.status(201).json({ ...PdBrand, ...PdType });
  } catch (error) {
    return res
      .status(500)
      .json({ message: '연관된 상품을 가져오는 중, 에러가 발생했습니다.' });
  }
};

// 유저가 등록한 상품을 가져오는 핸들러
export const getProductByUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `${id}에 해당하는 유저가 존재하지 않습니다.` });
    }
    const userProducts = await Product.find({ pdUploader: id });

    return res.status(201).json(userProducts);
  } catch (error) {
    return res
      .status(500)
      .json({ message: '유저가 등록한 상품을 찾는 중 에러가 발생했습니다.' });
  }
};

// 상품을 삭제하는 핸들러
export const deleteProduct = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `${id}에 해당하는 상품이 존재하지 않습니다.` });
    }
    await Product.findByIdAndRemove(id);
    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: '상품을 삭제하는 중 에러가 발생했습니다.' });
  }
};

//검색바에서 상품을 가져오는 핸들러
export const searchProduct = async (req, res) => {
  try {
    const {
      query: { keyword },
    } = req;
  } catch (error) {
    return res
      .status(500)
      .json({ message: '상품을 검색하는 중 에러가 발생했습니다.' });
  }
};
