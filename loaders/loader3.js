// loader-utils最新版本已移除getOptions
// 获取loader属性
const { getOptions } = require("loader-utils");
// 校验options是否合法
const { validate } = require("schema-utils");

const schema = require("./schema.json");

module.exports = function (content, map, meta) {
  const options = getOptions(this);

  console.log("loader33", options);

  //校验是否合法
  validate(schema, options, {
    name: "loader3",
  });

  return content;
};
module.exports.pitch = function () {
  console.log("pitch33");
};
