const path = require("path");
//const merge = require("webpack-merge");
const base = require("./base.js");

const dev = {
    devServer: { 
        port:8801,
        historyApiFallback: true,
        /*解决刷新报404 
        BrowserRouter时URL是指向真实URL的资源路径，而该路径下并没有相关的资源
        考虑hashRouter
        */
		open:true
    },
    // 生成map格式的文件，里面包含映射关系的代码，如果想查看在源文件中错误的位置，则需要使用映射关系，找到对应的位置。
    devtool: 'source-map', 
}

//合并基础配置和dev配置
module.exports =Object.assign(base,dev)//merge.merge (cfgbase, dev)
/*
module.exports=function (env, argv){
  return Object.assign(cfg,argv.mode === 'development'?require('./dev.js'):require('./prod.js'))
}
*/