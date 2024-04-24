const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === 'CastError' && err.kind === 'objectId') {
        statusCode = 404;
        message = "Resourse not found!"
    };

    res.status(statusCode).json({
        message,
        stack: err.stack,
    });
};

export {
    notFound,
    errorHandler
}