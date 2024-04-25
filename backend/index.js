import express from 'express';

// middleware
import cookieParser from 'cooki-parser';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';


// router
import signUpRouter from "./services/signUp/signupRouterService.js";

const app = express();


app.use(express.json()); // body parser 
app.use(express.urlencoded({extended:true})); // allow us to send form data
app.use(cookieParser()) // cookie parser

app.get('/', (req, res) => {
    res.send("Hello world!");
});


app.use('/api/user', signUpRouter);


// error handler middleware
app.use(notFound);
app.use(errorHandler);

export default app;