var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	var friendName = req.query.name;
	var friendDescription = req.query.description;

	var newFriend = 
		{
			"name": friendName,
			"description": friendDescription,
			"imageURL": "http://www.quickmeme.com/img/51/51ac0906b11d3497e492a3f24feba2d18988a4dc6c54afbcb0d3e6ff2da15537.jpg"
		}

	console.log(newFriend);
	data["friends"].push(newFriend);
	console.log(data);
	res.render('add',data);
}