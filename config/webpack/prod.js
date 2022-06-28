const path = require("path");
//const merge = require("webpack-merge");
const base = require("./base.js");

const prod = {
    devServer: { 
        port:8802 ,
    },

}
module.exports =Object.assign(base,prod)//merge.merge (base prod)
