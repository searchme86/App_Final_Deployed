import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.SECRET);
      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res
        .status(419)
        .json({ message: '토큰이 만료됐습니다, 로그인을 해주세요' });
    }
  }
};

export default auth;
