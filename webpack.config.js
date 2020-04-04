const path = require("path");
const fs = require('fs');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

// const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const appSrc = resolveApp('src');

module.exports = {
  mode: 'development',

  watch: true,

  // devtool: 'cheap-module-source-map', // TODO for debug

  entry: {
    popup: "./src/popup/scripts/index.js",
    content: "./src/content/scripts/index.js",
    background: "./src/background/scripts/index.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.module.css'],
    modules: ["node_modules"]
  },

  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              cache: true,
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
              resolvePluginsRelativeTo: __dirname,
              
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: appSrc,
      },
      {
        oneOf: [
          {
            test: /\.(jsx|js)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"
              ]
            }
          },
          {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.module\.css$/,
            use: ['style-loader', {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              }
            }],
          }
        ]
      }
    ]
  }
};
