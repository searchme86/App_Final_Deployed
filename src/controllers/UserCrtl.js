import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// 유저 등록
export const signup = async (req, res) => {
  const { nickname, email, password, imageFile } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(404).json({ message: '이미 존재하는 유저가 있습니다' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      nickname,
      email,
      password: hashedPassword,
      imageFile,
    });
    const token = jwt.sign(
      { email: newUser?.email, id: newUser?._id },
      process.env.SECRET,
      {
        expiresIn: '1h',
      }
    );
    return res.status(201).json({ newUser, token });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, message: '회원가입 중 에러가 발생했습니다' });
  }
};

// 유저 로그인
export const signin = async (req, res) => {
  const {
    body: { email, password },
  } = req;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser) {
      return res.status(404).json({
        message: '이메일에 해당한 유저가 없습니다, 이메일을 다시 확인해주세요',
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ message: '등록한 비밀번호가 아닌거 같아요! 확인해주세요!' });
    }
    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.SECRET,
      {
        expiresIn: '1h',
      }
    );
    return res.status(201).json({ newUser: oldUser, token });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, message: '로그인 중 에러가 발생했습니다' });
  }
};

// 유저 비밀번호 중복여부 확인
export const checkDuplication = async (req, res) => {
  try {
    const {
      params: { nickname },
      body: { password },
      body,
    } = req;

    const UserToNickname = await User.findOne({ nickname });

    if (!UserToNickname) {
      return res.status(404).json({
        message: `닉네임,${nickname}에 해당하는 유저가 존재하지 않습니다.`,
      });
    }

    const { password: UserDBPwd } = UserToNickname;
    let isChangable = await bcrypt.compare(password, UserDBPwd);

    if (!isChangable) {
      return res.status(200).json({
        message: '이전 비밀번호와 다릅니다, 비밀번호 변경이 가능합니다.',
        changable: true,
      });
    } else {
      return res.status(201).json({
        message: '이전 비밀번호와 동일합니다',
        changable: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: '비밀번호 변경체크 작업을 진행하면서 에러가 발생했습니다,',
      error: error,
    });
  }
};

// 유저 정보(유저 비밀번호/프로필 이미지) 변경 핸들러
export const setNewInfo = async (req, res) => {
  try {
    const {
      params: { nickname },
      userId,
      body,
    } = req;

    let newPwd = body?.confirmPassword;
    let newImg = body?.imageFile;

    const beforeUser = await User.findOne({ _id: userId });

    if (!beforeUser) {
      return res
        .status(404)
        .json({ message: `${nickname}에 해당하는 유저가 없습니다.` });
    }

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(newPwd, salt);

    await User.findByIdAndUpdate(
      { _id: userId },
      { password: newPassword, imageFile: newImg },
      { new: true }
    );

    let newProfile = beforeUser.imageFile;

    return res.status(201).json({
      newProfile,
      status: `${nickname}님의 비밀번호와 프로필 이미지가 변경됐습니다.`,
    });
  } catch (error) {
    return res.status(500).json({
      message: '비밀번호 혹은 프로필 이미지 변경이 실패했습니다.',
      error: error,
    });
  }
};
