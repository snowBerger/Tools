var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'jshint',
            include: APP_PATH
        }],
        loaders: [{
                test: /\.css$/, //包含需要匹配的文件
                loaders: ['style', 'css'], //包含需要处理程序的loaders,顺序：从右向左(css-loader   style-loader)
                include: APP_PATH
            },
            /*{
                       test: /\.scss$/, //包含需要匹配的文件
                       loaders: ['style', 'css', 'sass'], //包含需要处理程序的loaders, sass与css混合使用，先require的样式会被覆盖 （由于版本的问题，node 5+不支持node-sass）
                       include: APP_PATH
                   }, */
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=15360'
            }, {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],
    //配置jshint的选项，支持es6的校验
    jshint: {
        "esnext": true
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        //其实很简单的，只要配置这个参数就可以了
        proxy: {
            '/api/*': {
                target: 'http://localhost:5000',
                secure: false
            }
        }
    },
    devtool: 'eval-source-map'
};
