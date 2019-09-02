function normalizedPath(path) {
  return path.replace(/\/|\.|-/g, "_");
}

function Loader (source) {
  const name = normalizedPath(this.resourcePath);
  this.query.files.push({ name, content: source.toString("base64") });
  return `export default ${name.toUpperCase()}`;
};

Loader.raw = true;
module.exports = Loader;
