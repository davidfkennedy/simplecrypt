function simplecrypt(){
	//all comments are below the line they are referencing
	var cypher = prompt("Enter Your Codeword Here");
	var hasDuplicates = (/([a-z]).*?\1/).test(cypher)
	//hasDuplicates checks for duplicate letters. If it finds them, it starts you over.
		if (hasDuplicates == true) {
			alert("Whoa now, NO DUPLICATE LETTERS!")
		} else {
			var codecheck = confirm("Your Codeword is '" + cypher + "' click OK if this is correct.")
	//codecheck = user confirmation that their cypher is correct
			if (codecheck == true) {
				alert("Its right!")
			} else {
				alert("For now you have to just start over, click OK")
				//change this later. preferably, make it just loop to the top of the function
			}
		}
}