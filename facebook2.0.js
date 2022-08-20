var database = [
	{
		username: "alvin",
		password: "moonkiller"	
	},
	{
		username: "molly",
		password: "facetat"
	},
	{
		username: "patrick",
		password: "mapquest"
	}
];

	
var newsfeed = [
	{
		username: "alvin",
		timeline: "Look at my new boat I just got"
	},
	{
		username: "molly",
		timeline: "OMG, guess what guys I am pregnant"
	},
	{
		username: "patrick",
		timeline: "Update I just won my dirtbike competition"
	}
];

function isUserValid(username,password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
		database[i].password === password) {
			return true; 
		} 
	} return false;
}


function signIn(username, password) {
	if (isUserValid(username,password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");



signIn(userNamePrompt, passwordPrompt);