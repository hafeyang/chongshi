var mongoose = require('mongoose')
  , db = mongoose.createConnection('localhost', 'chongshi');


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	var WordSchema = new mongoose.Schema({
	    en : String,
	    chs : String,
	    PhoneticSymbol:String
	});

	var Word = mongoose.model('Word', WordSchema);


	var helloWord = new Word({
		en:"hello",
		chs:"你好",
		PhoneticSymbol:"heˈləu"
	});

	console.log(helloWord.chs);
	
	helloWord.save(function (err) {
		if (err) // TODO handle the error
	  		console.log('meow')
	});

	Word.find(function (err, words) {
	  	console.log(words);
	})


});


