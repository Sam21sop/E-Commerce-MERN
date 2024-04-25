import expressAsyncHandler from "express-async-handler";
import userModel from "../../models/userModel.js";
import generateToken from "../../utility/generateToken.js";



const registerUser = expressAsyncHandler( async (req, res) => {
    // @desc    register user 
    // @route   POST: /api/user/register
    // @access  Public
    
    // extract data from body 
    const {name, email, password} = req.body;
    
    // let check user exist or not
    const userExist = await userModel.find({email});
    if(userExist){
        res.status(400);
        throw new Error("User already exist !");
    };

    // lets create a new user if not exist
    const newUser = await userModel.create({
        name, 
        email,
        password
    });

    // send appropriate response
    if(newUser){
        // set token to cookie
        generateToken(res, newUser._id)
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email
        });
    }else{
        res.status(400);
        throw new Error("Invalid user !");
    };
});


const authUser = expressAsyncHandler( async (req, res) => {
    // @desc    Auth user / set token
    // @route   POST: /api/user/auth
    // @access  Public

    // extract email and password from body
    const {email, password} = req.body

    // get user from database
    const user = await userModel.find({email});

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});


const logoutUser = expressAsyncHandler( async (req, res) => {
    // @desc    logout user
    // @route   POST: /api/user/logout
    // @access  Public
    res.cookie('jwt', '', {
        httpOnly:true,
        expires: new Date(0),
    });
    res.status(200).json({message: "user logged out succeessfuly!"});
});


const getUserProfile = expressAsyncHandler( async (req, res) => {
    // @desc    get user profile
    // @route   POST: /api/user/profile
    // @access  Private

    const {_id, name, email} = req.user

    res.status(200).json({
        _id,
        name,
        email
    });
});


const updateUserProfile = expressAsyncHandler( async (req, res) => {
    // @desc    update user profile
    // @route   PUT: /api/user/profile
    // @access  Private

    // find user by id
    const user = await userModel.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        };

        const updatedUser = await user.save();
        res.status(201).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        });
    } else {
        res.status(404);
        throw new Error('User not found!');
    }
});


// name export controller functionality
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};