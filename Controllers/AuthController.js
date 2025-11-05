const bcrypt = require('bcrypt');
const UserModel = require("../Models/User")
const jwt = require('jsonwebtoken');

const signup = async(req,res) => {
    try{
        const {name, email, password,contact,userID} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
                .json({message: 'User already exists, you can login', success:false});
        }
        const userModel = new UserModel ({name, email, password, contact, userID})
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup Successful",
                success: true
            })
    }catch(err) {
        console.error('Signup Error:', err);
        res.status(500)
        .json({
            message: "Internal server error",
            success: false
        })

    }
}

const login = async(req,res) => {
    try{
        const {userID, password} = req.body;
        const user = await UserModel.findOne({userID});
        const errorMsg = 'Auth Failed, Email or Password is wrong';
        if(!user){
            return res.status(409)
                .json({message: 'User does not exist', success:false});
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if(!isPassEqual)
        {
            return res.status(409)
                .json({message: errorMsg, success:false});
        }
        
        const jwtToken = jwt.sign(
            {userID: user.userID, _id:user._id},
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Successful",
                success: true,
                jwtToken,
                userID,
                name: user.name
            })
    }catch(err) {
        console.error('Login Error:', err);
        res.status(500)
        .json({
            message: "Internal server error",
            success: false
        })

    }
}

module.exports = {
    signup,
    login
}