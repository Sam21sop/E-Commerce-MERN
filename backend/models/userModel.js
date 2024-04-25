import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = Schema(
    {
        name:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true,
            unique:true
        },

        password:{
            type:String,
            required:true
        },
    }, 
    {
        timestamp:true
    }
);

// hash password before saving into database
userSchema.pre('save', async function (next) {
    
    // check is password modified if no then call next middleware
    if (!this.isModified('password')) {
        next();
    };

    // else hash the password and save into database
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt)
});


// compare plain text passwords with saved hash password
userSchema.method.matchPassword = async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password);
};


const userModel = model('Users', userSchema);
export default userModel;