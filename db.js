var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;

var server = new Server('localhost', 27017, {});
var db = new Db('chongshi', server,{safe:true});

db.open(function(err, db) {
  if(!err) {
    console.log("We are connected"); //work
    db.collection('words', {safe:true}, function(err, words) {
        if(err){
            console.log(err);
        }
        words.insert({id:1,cn:"你好",en:"hello"},{safe:true},function(err){
            if(err){
                console.log(err);
            }
        });
    });
  }
});

