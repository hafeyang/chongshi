<<<<<<< HEAD
var mongoose = require('mongoose');
db = mongoose.connect('mongodb://localhost/chongshi',function(err,db) {
    if (err) { 
    	console.log(err);
    }else{
    	var Word =  mongoose.model('words',new mongoose.Schema({
    		en:String,
    		cn:String
    	}));


    	var word = new Word({cn:"你好",en:"hello"});

    	word.save(function  (e) {
    		// body...
    	});

    	Word.find(function  (err,w) {
    		if(err){
    			console.log();
    		}else{
    			for (var i = w.length - 1; i >= 0; i--) {
    				var ww = w[i];
    				ww.remove();
    			};
    			mongoose.disconnect();
    		}
    	})
    }
=======
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
>>>>>>> 18e6c062ae166407063a4a2dd920d50380ad2aa4
});

