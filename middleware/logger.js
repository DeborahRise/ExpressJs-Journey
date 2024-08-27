import colors from 'colors';


// Logger Middleware
const logger = (req, res, next) => {
    // define an object for the colors and corresponding method
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    }

    // initialize the colour variable
    const color = methodColors[req.method] || 'white'

    console.log(
        `${req.method}: //${req.protocol}${req.get('host')} ${req.originalUrl}`
    [color]);
    next();
};

export default logger;