module.exports = function (content, map, meta) {
  console.log("loader11");
  // 同步loader,写这个可以不用写return
  this.callback(null, content, map, meta);
  // return content;
};

module.exports.pitch = function () {
  console.log("pitch11");
};
