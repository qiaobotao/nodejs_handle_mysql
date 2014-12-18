/**
 * Created with JetBrains WebStorm.
 * User: qiaojoe
 * Date: 14-4-17
 * Time: 下午5:01
 * To change this template use File | Settings | File Templates.
 *
 * 数据库连接
 *
 */

var mysql = require('mysql');
var db_options ={

    host : 'sandu.ihejun.com',
    user : 'root',
    password : 'mysqlroot!@#456.123',
    database : 'ihejun_society_dev',
    port : 3306
};

exports.db_conn = function () {
    mysql.createQuery
    return   mysql.createConnection(db_options);

}

exports.close = function (conn) {
    if (conn != null) {
        conn.end();
    }
}