function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next(); // User is authenticated, allow access to the next function
    }
    res.status(401).json({ message: 'Unauthorized' }); // User is not authenticated, return an error
  }
  
export default isAuthenticated;
  