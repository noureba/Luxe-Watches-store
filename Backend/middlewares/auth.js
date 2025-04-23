import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            success:false,
            message:"You are not have authorization please login"
        })
    }
}