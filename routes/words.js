exports.list = function(req, res){
	res.render("words",{
		title:"单词",
		list:[
			{name:"hello",chs:"你好",remembered:true},
			{name:"Chinese",chs:"中国",remembered:false}
		]
	});
}