const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../schemas/User");
const { getSecretKey } = require("../utils/utils");

const doLogin = async ({ username, password }) => {
  const userInfo = await User.findOne({ username }).lean();
  if (!userInfo || !bcrypt.compareSync(password, userInfo.password))
    throw new Error("Username or password is wrong");

  const secretKey = await getSecretKey();
  const signOptions = {
    algorithm: "HS256",
    subject: userInfo._id.toString(),
    expiresIn: "1d",
  };

  delete userInfo.password;
  const token = jsonwebtoken.sign(userInfo, secretKey, signOptions);
  return {
    success: true,
    message: `Login success`,
    token,
    userId: userInfo._id.toString(),
  };
};

module.exports = { doLogin };
