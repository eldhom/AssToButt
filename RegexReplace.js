
/*Examplefunction
 *	Takes the matched word as an argument
 *	and return a string which will replace it
 */
function replaceAss(word) {
	if(word.charAt(0) == word.charAt(0).toUpperCase()) {
		return "Butt";
	} 
	return "butt";
}

/*
 *	Associative map: 
 *	key:string
 *	key:function
 */
var replaceMap 	= {
	"ass":replaceAss,	//Example key:function
	"a.s.s":"B.U.T.T"	//Example key:string
}

/*
 *	List of regex to be matched
 */
var regexArr 	= [
	"[Aa][Ss]{2}", 		//Example regex
	"[Aa](\\.[Ss]){2}"
];

/*
*	Returns a list of all textnodes
*/
function getTextNodes(node) {
	var textNodes = [];
		if(node.nodeType == 3) {
			textNodes.push(node);
		} else {
			for(var i=node.childNodes.length; i--;) {
				textNodes = textNodes.concat(getTextNodes(node.childNodes[i]));
			}
		}
	return textNodes;
}


/*
*	Replaces all regex matches found with the given value
*/
function regexReplace() {
	console.time("RegexReplace");
	console.log("RegexReplace: Running");

	var textNodes = getTextNodes(document.body);
	var re = new RegExp("("+regexArr.join("|")+")", "gi");
	var matchCount = 0;

	console.log("RegexReplace: Parsing " + textNodes.length + " elements");
	for(var i=textNodes.length; i--;) {
		var node = textNodes[i];
		node.nodeValue = node.nodeValue.replace(re, function(matched, p1) {
				matchCount++;
				var obj = replaceMap[matched.toLowerCase()];
				return typeof obj == "string" ? obj : obj(p1);
				});
	}

	console.log("RegexReplace: " + matchCount + " matches parsed");
	console.log("RegexReplace: Done");
	console.timeEnd("RegexReplace");
}

//Wait until document is ready
document.addEventListener("DOMContentLoaded", regexReplace()); 
