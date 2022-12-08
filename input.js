function filterName(name) {
  if (name === undefined) {
    name = "Unkwon";
  }
  if (name.startsWith(" ") || name.endsWith(" ")) {
    name = name.trim();
  }
  return name;
}
module.exports = filterName;
