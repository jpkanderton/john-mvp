const path = require("path");

module.exports = {
 entry: './client/src/app.jsx',
 //`${SRC_DIR}/index.jsx`
 watch: true,
 output: {
   path: path.resolve(__dirname, 'dist'),
   filename: "bundle.js"
 },
 module: {
   rules: [{
     test: /\.jsx?$/,
     exclude: "/node_modules/",
     loader: "babel-loader"
   }]
 }
};
