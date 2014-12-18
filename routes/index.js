
/*
 * GET home page.
 * 数据库操作，包含事务操作
 */
var queues = require('mysql-queues');
var async = require('async');
var db = require('./DBManager');

exports.index = function(req, res){

    var conn = db.db_conn();

    conn.connect();

    queues(conn);

    var trans = conn.startTransaction();

    async.series([
         function(callback1){
              console.log('111111111111111111111111111');
              var sql = "INSERT INTO user(username,password) VALUES ('111', '333')";
              trans.query(sql,function(err,info){
                  console.log(err+'aaaaaaaaaaaaaaaaaaaa');
                   callback1(err,info);
              });

         },
         function(callback2){
             console.log('222222222222222222222222');
             var sql = "INSERT INTOassword) VALUES ('111', '333111')";
             trans.query(sql,function(err,info){
                 console.log(err+'bbbbbbbbbbbbbbbbbbbbbb');
                  callback2(err,info);
             });

         },
         function(callback3){
             console.log('33333333333333333333');
             var sql = "INSERT INTO user(username,password) VALUES  ('111111', '333111')";
             trans.query(sql,function(err,info){
                 console.log(err+'ccccccccccccccccc');
                  callback3(err,info);
             });
         }

    ],function(err,results){

        if (err) {
            console.log("rollback");
            // 出错的场合 回滚
            trans.rollback(function(err,info){
                  db.close(conn);
            });

        } else {
            // 没有错误的场合 提交事务
            console.log('55555555555555555555555');
            trans.commit(function(err,info){
                  db.close(conn);
            });

        }
        console.log('final');


    });
    // 执行这个事务
    trans.execute();
    console.log('4444444444444444');
    res.send('完成');
};
