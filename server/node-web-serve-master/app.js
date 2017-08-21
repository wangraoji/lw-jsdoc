//挂载/routes/cm.js
var koa = require('koa'),
    path = require('path'),
    serve = require('koa-static');


var app = module.exports = koa();

app.use(serve(__dirname + '/app'));

module.exports = app;


module.exports = function(app) {
    var Router = require('koa-router'),
        indexCtrl = require('app/index.html');

    var router = new Router();

    router
        .get('/', indexCtrl.index)
    app.use(router.middleware());
};


if (!module.parent) app.listen(4200, function() {
    console.log('start at port 4200');
});