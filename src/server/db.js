/*
 mssql模块简单封装
*/
const mssql = require('mssql');
const db = {};
const config = {
    user: 'bds284289212',
    password: '!Qq00000',   //改成你自己的
    server: 'bds284289212.my3w.com',  //改成你自己的
    database: 'bds284289212_db',     //改成你自己的
    port:1433,            //改成你自己的
    options: {
    encrypt: false // Use this if you're on Windows Azure
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000
    }
};

//执行sql,返回数据.
db.sql = function (sql, callBack) {
    const connection = new mssql.ConnectionPool(config, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        const ps = new mssql.PreparedStatement(connection);
        ps.prepare(sql, function (err) {
            if (err){
                console.log(err);
                return;
            }
            ps.execute('', function (err, result) {
                if (err){
                    console.log(err);
                    return;
                }

                ps.unprepare(function (err) {
                    if (err){
                        console.log(err);
                        callback(err,null);
                        return;
                    }
                    callBack(err, result);
                });
            });
        });
    });
};


exports.sql = db.sql;