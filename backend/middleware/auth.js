import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    // Extract the token from the request headers
    const { token } = req.headers;

    // If no token is provided, deny access
    if (!token) {
        return res.json({ success: false, message: "Not Authorized Login Again" });
    }

    try {
        // Decode and verify the token using the secret key
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user ID to the request body
        req.body.userId = token_decode.id;

        // Pass control to the next middleware or the controller function
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export default authMiddleware;