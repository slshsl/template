const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");
const babelSchema = require("./babelSchema.json");
const babel = require("@babel/core");
const util = require("util");
// babel.transform用来编译代码的方法，是一个回调的异步方法
//util是node的库，将回调转为promise
const transform = util.promisify(babel.transform);
module.exports = function (content, map, meta) {
  console.log("babelLoader-loader");
  const options = getOptions(this) || {};
  validate(babelSchema, options, {
    name: "Babel Loader",
  });
  //创建异步
  const callback = this.async();

  transform(content, options)
    .then(({ code, map }) => {
      callback(null, code, map, meta);
    })
    .catch((e) => callback(e));
};

module.exports.pitch = function () {
  console.log("babelLoader-pitch");
};
