import dotenv from 'dotenv';
dotenv.config();


const configerEnvironmentVariable = () => {
    return process.env;
};

const configEnvVar = configerEnvironmentVariable();
export default configEnvVar;