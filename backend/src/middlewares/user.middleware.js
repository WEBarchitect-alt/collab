const jwt = require('jsonwebtoken');


async function identify(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            "message" : "Unauthorized"
        })
    }

    let decode;
    try {
        decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }
    catch(err){
        return res.status(401).json({
            "message" : "Unauthorized"
        })

    }
}

module.exports = { identify };