const login = require("./login");
const register = require("./register");

const createAuthMiddleware = (userModel) => {
  const authMethods = {};

  authMethods.login = (req, res, next) => login(req, res, next, userModel);
  authMethods.register = (req, res, next) =>
    register(req, res, next, userModel);

  return authMethods;
};

module.exports = createAuthMiddleware;
