// Error handler middleware

const errorHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).json({messager: err.message});
    } else res.status(500).json({msg: err.message});
};

export default errorHandler;