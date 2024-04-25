import mongoose from "mongoose";
import configEnvVar from "../utility/configEnvVariables.js";


const DB_BASE_URL = configEnvVar.DB_URL;
const DATABASE_NAME = configEnvVar.DB_NAME;

const mongoDB = async () => {
    try {
        const conne = await mongoose.connect(`${DB_BASE_URL}/${DATABASE_NAME}`); // local connection
        console.log(`MongoDB connected: ${conne.connection.host}`);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};


export default mongoDB;