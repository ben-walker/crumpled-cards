export default (value) => {
  const port = parseInt(value, 10);
  if (Number.isNaN(Number(port))) return value;
  if (port >= 0) return port;
  return value;
};
