
/*
 * GET users listing.
 *
 * 发http请求方法
 */

var send_http = require('request');
var querystring = require('querystring');

exports.list = function(req, res){
  //res.send("respond with a resource");
    res.set('Content-Type','text/plain','charset=UTF-8'); //设置消息头
    var url = 'http://localhost:8066/sandu?';
    var post_data = querystring.stringify({
       version : 1,
        protocol : 50002,
       // communityid :  '1001',
       // username : '乔伯涛',
        //password : 'E10ADC3949BA59ABBE56E057F20F883E',//请求类型，为 0 receiver，区分的是已处理和未处理状态 1，收藏 已读和未读状态，同时log改变，变未读 2，抄送，只区分已读和未读    3 自己发布的初始就是未读的，但是log该变
        //也变成未读   4 返回所有未处理事务，5返回所有已处理事务
        mobile : '15910516643'
        //password : '30E9801A7620'
       // communityName : '测试',
        //eName : '你妹',
        //department : '开发',
        //position : '职位'


    });


    send_http.post({
            headers :{'content-type':'application/x-www-form-urlencoded'},
            url : url,
            body: post_data
        }, function(error,response,body){
            if(error){
                console.log('post 请求失败 :'+error.message);
                return;
            }
           res.send(body);
        }
    );





}

