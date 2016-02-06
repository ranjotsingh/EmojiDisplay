var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

		addEmoji('😀', "https://emojipedia-us.s3.amazonaws.com/cache/49/b8/49b846579cf59834716c1b0a73fa166c.png");
		addEmoji('😁', "https://emojipedia-us.s3.amazonaws.com/cache/93/27/9327b222795650ef891a38440aec0de7.png");
		addEmoji('😂', "https://emojipedia-us.s3.amazonaws.com/cache/17/47/17474d3a52fd7efdada7b5896b5c5906.png");
		addEmoji('😃', "https://emojipedia-us.s3.amazonaws.com/cache/a9/48/a948113eb86d6ead15c4626fd88fb440.png");
    }
}

function addEmoji(ASCII, imgURL) {
	if (node.nodeType === Node.TEXT_NODE) {
		var text = node.nodeValue;
		var part = splitWithTail(text, ASCII);
		var regex = new RegExp(ASCII, "g");
		var old = node.parentElement;
		var img = new Image(20, 20);
		img.src = imgURL;
		
		var replacedText = text.replace(regex, img);
		if (replacedText !== text) {
			old.insertBefore(document.createTextNode(part[0]), node);
			old.insertBefore(img, node);
			old.insertBefore(document.createTextNode(part[1]), node);
			old.removeChild(node);
		}
	}
}

function splitWithTail(str, delim) {
	var parts = str.split(delim);
	var tail = parts.slice(1).join(delim);
	var result = parts.slice(0, 1);
	result.push(tail);
	return result;
}

/*
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
		
		if (node.nodeType === Node.TEXT_NODE) {
			var text = node.nodeValue;
			var part = text.split(/😀/gi);
			var old = node.parentElement;
			var img = new Image(20, 20);
			img.src = "https://emojipedia-us.s3.amazonaws.com/cache/49/b8/49b846579cf59834716c1b0a73fa166c.png";
			
			var replacedText = text.replace(/😀/gi, img);
			if (replacedText !== text) {
				old.insertBefore(document.createTextNode(part[0]), node);
				old.insertBefore(img, node);
				old.insertBefore(document.createTextNode(part[1]), node);
				old.removeChild(node);
			}
		}
    }
}
*/