import expressAsyncHandler from "express-async-handler";


const authUser = expressAsyncHandler( async (req, res) => {
    // @desc    Auth user / set token
    // @route   POST: /api/user/auth
    // @access  Public

    res.status(200).json({message: "user is authorized!"});
});


const registerUser = expressAsyncHandler( async (req, res) => {
    // @desc    register user 
    // @route   POST: /api/user/register
    // @access  Public

    res.status(200).json({message: "user rgister successfully!"});
});


const logoutUser = expressAsyncHandler( async (req, res) => {
    // @desc    logout user
    // @route   POST: /api/user/logout
    // @access  Public

    res.status(200).json({message: "user logged out succeessfuly!"});
});


export {
    authUser,
};

