function replaceAss(word) {
	if(word.charAt(0) == word.charAt(0).toUpperCase()) {
		return "Butt";
	} 
	return "butt";
}

/*
*	Associative map: 
*	add lowercase words associated to a function 
*	which takes a regex matched word as argument
*/
var replaceMap 	= {
	"ass":replaceAss
}

/*
*	List of regex to be matched
*/
var regexArr 	= [
	"[Aa][Ss]{2}"
];


function regexReplace(node) {
	node = node || document.body;
	if(node.nodeType == 3) {
		// Text node
		var re = new RegExp("("+regexArr.join("|")+")", "gi");
				console.log(re);
		node.nodeValue = node.nodeValue.replace(re, function(matched, p1) {
				return replaceMap[matched.toLowerCase()](p1);
				});
	} else {
		var nodes = node.childNodes;
		if(nodes) {
			for(var i=0; i<nodes.length; i++) {
				regexReplace(nodes[i]);
			}
		}
	}
}
document.addEventListener("DOMContentLoaded", regexReplace()); 
