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
});


