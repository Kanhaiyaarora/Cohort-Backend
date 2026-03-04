const jwt = require("jsonwebtoken")

async function authUser(req,res,next) {
  const token = res.cookies.token
  if(!token){
    return res.status(404).json({
      message: "token not found"
    })
  }

const user = jwt.verify(token,{

})


}