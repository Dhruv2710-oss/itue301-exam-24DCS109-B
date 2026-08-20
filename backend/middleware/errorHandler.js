function errorHandler(err, req, res, next) {
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((item) => item.message);
    return res.status(400).json({
      success: false,
      message: messages.join(", "),
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
  });
}

module.exports = errorHandler;
