import configEnvVar from "./backend/utility/configEnvVariables.js";
import app from "./backend/index.js";
import mongoDB from "./backend/databaseConfig/mongoDB.js";

const PORT = configEnvVar.PORT || 3030 

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
    mongoDB(); // connect with database
});
