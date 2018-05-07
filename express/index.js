var express = require('express');
var app = express();
var server = app.listen(33000, function() {
  console.log('open me: http://localhost:' + server.address().port);
});
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : '',
  database : 'mascots'
});

app.set('view engine', 'ejs');
app.get('/', function(req, res, next) {
  connection.query('select * from mascots', function(error, results, fields) {
    if (error) {
      res.render('mysql_connection_failed', {});
    } else {
      res.render('index', {
        results : results
      });
    }
  });
});
