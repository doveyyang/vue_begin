//webpack 是基于Node进行构建的

var path = require('path')
//在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动打包好的bundle注入到页面底部
var htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//当以命令行形式运行webpack或webpack-dev-server的时候，工具会发现，我们没有要打包的文件的入口和出口文件，此时，会检查项目更目录中国的配置文件，并读取我这个文件，就拿到了导出的这个配置对象，然后根据这个对象进行打包构建


module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),//输出路径
        filename:'bundle.js',//指定输出文件名
    },
    plugins:[
        //所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'), //指定模板文件路径
            filename:'index.html' //设置生成的内存页面名称
        }),
        new VueLoaderPlugin()
    ],
    module:{
        //配置所有第三方loader模块的
        rules:[
            //第三方模块的匹配规则
            { test:/\.css$/,use:['style-loader','css-loader'] },
            { test:/\.less$/,use:['style-loader','css-loader','less-loader'] },
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader'] },
            { test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader' }, //处理图片路径的loader  limit参数是图片的大小，单位是byte，如果我们引用的图片，大于或等于给定的limit值，则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64的字符串，
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },
    resolve:{
        alias:{ //修改vue被导入包的时候的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}