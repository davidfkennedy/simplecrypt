function simplecrypt(){
	//all comments are below the line they are referencing
	var codeWord = prompt("Enter Your Codeword Here");
	var cypher = codeWord.toUpperCase();
	//converts the codeWord to ALL CAPS
	cypher = cypher.split(" ").join("");
	cypherLength = cypher.length;
	//this calculates cypher length and removes the spaces, rad.
	var hasDuplicates = (/([A-Z]).*?\1/).test(cypher)
	//hasDuplicates checks for duplicate letters. If it finds them, it starts you over.
		if (hasDuplicates == true) {
			alert("Whoa now, NO DUPLICATE LETTERS!")
		} else {
			var codeCheck = confirm("Your Codeword is '" + cypher + "' click OK if this is correct.")
			//codecheck = user confirmation that their cypher is correct
			if (codeCheck == false) {
				alert("For now you'll have to just start over, we're very sorry. Click OK.")
				//PROGRAM NOTE: change this later. preferably, make it just loop to the top of the function
			} else {
				var clearTextEntry = prompt("Enter the message you want to encrypt, do not include punctuation");
				var clearText = clearTextEntry.toUpperCase();
				//here is where we prompt for what they want to encrypt, and then convert it to ALL CAPS
				clearText = clearText.split(" ").join("");
				clearTextLength = clearText.length;
				//determines the length without spaces of the cleartext
				extraChar = clearTextLength % cypherLength
				//how many exclamation points go at the end of the message. 
			}
		}
	}