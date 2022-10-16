// creating token and storing it to cookie
const COOKIE_EXPIRE = process.env.JWT_EXPIRE
// for general user
exports._sendToken = (user, statusCode, res) => {
  const JWT_TOKEN = user.getJWTToken()
  //cookie options
  const options = {
    expiresIn: new Date(Date.now() + process.env.JWT_EXPIRE * 24 * 60 * 60 * 100), //milli seconds
    httpOnly: true,
    // secure:true,
    // sameSite:'none',
  }
  res.cookie("token", JWT_TOKEN, options)
  res.status(statusCode).json({
    success: true,
    user,
    JWT_TOKEN,
  })
}