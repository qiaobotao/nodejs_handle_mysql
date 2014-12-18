/**
 * Created with JetBrains WebStorm.
 * User: qiaojoe
 * Date: 14-4-18
 * Time: 下午9:56
 * To change this template use File | Settings | File Templates.
 *
 * 单个数据库操作
 *
 */

var db = require('./DBManager');
exports.dbtest = function(req,res){

    var insert = 'INSERT INTO ihejunmessage (content,contentType) VALUES(😉😌😨😷😝😨😳,1000) ';

    var getValue = 'select content from ihejunmessage where contentType = 1000';

    var conn = db.db_conn();

    conn.query(insert, function (err, results) {

        if (err) {

             console.log('插入失败');

        } else {
            console.log('插入成功');
        }

        conn.query(getValue,function(err, results){

            if (err) {

                console.log('获取数据失败');

            } else {
                console.log('获取成功');
                console.log(results);
            }

        });


    });
}