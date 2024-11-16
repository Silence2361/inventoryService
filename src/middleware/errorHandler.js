export default (err, req, res, next) => {
  console.error(err.stack);
  const status = err.message.includes("not found") ? 404 : 400;
  res.status(status).json({ error: err.message || "Internal Server Error" });
};
