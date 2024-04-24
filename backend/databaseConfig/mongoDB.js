import mongoose from "mongoose";
import configEnvVar from "../utility/configEnvVariables.js";


const DB_BASE_URL = configEnvVar.DB_URL;
const DATABASE_NAME = configEnvVar.DB_NAME;
console.log(DB_BASE_URL, DATABASE_NAME);

const mongoDB = async () => {
    try {
        await mongoose.connect(`${DB_BASE_URL}/${DATABASE_NAME}`);
        console.log(`Database connection established !`);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};


export default mongoDB;