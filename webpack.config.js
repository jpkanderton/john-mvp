const path = require("path");

const src = path.resolve('./client/src/index.jsx');
const dist = path.resolve('./client/dist');
console.log(src, dist);

module.exports = {
 entry: src,
 watch: true,
 output: {
   path: dist,
   filename: "bundle.js"
 },
 module: {
   rules: [{
     test: /\.jsx?$/,
     exclude: "/node_modules/",
     loader: "babel-loader",
     options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
   }]
 }
};
