/**
 * Created with JetBrains WebStorm.
 * User: qiaojoe
 * Date: 13-10-14
 * Time: 下午4:59
 * To change this template use File | Settings | File Templates.
 */

var routes = require('./routes');
var user = require('./routes/user');
var dbtest = require('./routes/dbtest');
var test = require('./routes/test');

exports.route = function(app){

    app.all('/users', user.list);

    app.all('/detail',user.detail);

    app.all('/test',user.test);

    app.all('/',routes.index);

    app.all('/dbtest',dbtest.dbtest);

    app.all('/t',test.tt);


};
