import express from 'express';

// middleware
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

// router
import signUpRouter from "./services/signUp/signupRouterService.js";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world!");
});


app.use('/api/user', signUpRouter);


app.use(notFound);
app.use(errorHandler);

export default app;