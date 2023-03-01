module.exports = function (content, map, meta) {
  console.log("loader22");
  const callback = this.async();
  setTimeout(() => {
    callback(null, content);
  }, 2000);
  //用了callback可以不写return
  // return content;
};
module.exports.pitch = function () {
  console.log("pitch22");
};
