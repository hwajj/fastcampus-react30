const path = require("path"); //웹팩이 절대경로 찾을수있도록 함
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  // js 파일 진입점
  entry: "./src/js/index.js",

  // 빌드시 번들파일 관련속성
  output: {
    filename: "bundle.js", //번들된 파일명
    path: path.resolve(__dirname, "./dist"), // 번들 파일 생성 경로
    clean: true, // 번들 파일 생성 경로에 다른 파일 있다면 지우고 다시 생성
  },
  devtool: "source-map", // 빌드한 파일과 원본파일 연결
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "keyboard",
      template: "./index.html", //index.html 안에서 lodash 사용할수있게함
      inject: "body", //번들된 파일 body에 inject
      favicon: "./favicon.ico",
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
  module: {
    rules: [
      //.css 를 해당 loader로 읽어들이겠다
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
  },
};
