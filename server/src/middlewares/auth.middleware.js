import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const { token } = req.cookies
  
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    next();
  });
};

export const isAdmin = (req, res, next) => {

  

    if (req.cookie !== 1) { 
      return res.status(403).send({ auth: false, message: 'Requires Admin Role!' });
    }
    next();
  };

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
};


