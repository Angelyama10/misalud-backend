const notFound = (req, res, next) => {
  return res.status(400).json({
    message: "Not found",
  });
};

module.exports = notFound;
