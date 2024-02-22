const middleware = (req, res, next) => {
    const { token } = req.query;
    if (token !== '12345') {
        return res.status(401).send({ message: "Unauthorized: Token is missing or invalid" });
    }
    next();
};

function hasRole(req, res, next) {
    if (req.user.role !== "admin") {
        return res.status(403).send({ message: "Forbidden: Insufficient permissions" });
    }
    next(); 
}

module.exports = {
    authenticateMiddleware: middleware,
    authorizeMiddleware: hasRole
};
