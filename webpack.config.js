const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        //loader的执行顺序
        use: [
          "loader1",
          "loader2",
          {
            // 如何传参
            loader: "loader3",
            options: {
              name: "leo",
              age: 18,
            },
          },
          {
            loader: "babelLoader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  //loader的查找规则
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "loaders")],
  },
};
