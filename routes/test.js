/**
 * Created with JetBrains WebStorm.
 * User: qiaojoe
 * Date: 14-4-30
 * Time: 下午3:08
 * To change this template use File | Settings | File Templates.
 * 处理图片方法
 */

var images = require('node-images');
var path = require('path');
var fs = require('fs');
var db = require('./DBManager');
var crypto = require('crypto');
exports.t = function(req,res){

    var img_path = path.join(__dirname, '/../public/images/test.jpg');
    var save_path = path.join(__dirname, '/../public/images/test4.jpg');
    var hua = path.join(__dirname,'/../public/images/test3.jpg');
    var target = path.join(__dirname,'/../public/images/target.jpg');
    /*fs.stat(img_path,function(err,stats){
        console.log('原图大小'+stats.size);
    });
    images(img_path).save(save_path,{quality:99});
    console.log(images(img_path).width());
    fs.stat(save_path,function(err,stats){
        console.log('现图大小'+stats.size);
    });*/

    //images(200,200).draw(images(hua),10,10).save(save_path);
    images(img_path).size(60,60).save(img_path);
    images(200,200).fill(0xc0, 0xc0, 0xc0, 0.5).draw(images(img_path),5,5).save(target);
    images(target).draw(images(img_path),70,5).save(target);
    images(target).draw(images(img_path),135,5).save(target);
    images(target).draw(images(img_path),5,70).save(target);
    images(target).draw(images(img_path),70,70).save(target);
    images(target).draw(images(img_path),135,70).save(target);
    images(target).draw(images(img_path),5,135).save(target);
    images(target).draw(images(img_path),70,135).save(target);
    images(target).draw(images(img_path),135,135).save(target);
    res.send('wancheng');

}
