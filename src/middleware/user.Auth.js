import jwt from 'jsonwebtoken';
import 'dotenv/config'
import UserModel from "../models/user.Model.js";

export default async function UserAuth(req, res, next) {
    try {
        // access authorize header to validate request
        const token = req.headers.authorization.split(' ')[1];

        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

        // res.json(decodedToken)
        let { userId } = decodedToken
        let user = await UserModel.findById(userId);
        if (user) {
            req.user = decodedToken;
            next();
        } else {
            throw new Error("Invalid user or token");
        }
    } catch (error) {
        return res.status(401).json({ error: "Authentication Failed!" })
    }
}

export const allowRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.userType)) {
            return res.status(403).json({ success: false, message: "You are not allowed to perform this action" });
        }
        next();
    };
};
