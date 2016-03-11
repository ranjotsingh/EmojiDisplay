var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

		addEmoji('😀', "https://emojipedia-us.s3.amazonaws.com/cache/49/b8/49b846579cf59834716c1b0a73fa166c.png");
		addEmoji('😁', "https://emojipedia-us.s3.amazonaws.com/cache/93/27/9327b222795650ef891a38440aec0de7.png");
		addEmoji('😂', "https://emojipedia-us.s3.amazonaws.com/cache/17/47/17474d3a52fd7efdada7b5896b5c5906.png");
		addEmoji('😃', "https://emojipedia-us.s3.amazonaws.com/cache/a9/48/a948113eb86d6ead15c4626fd88fb440.png");
		addEmoji('😄', "http://emojipedia-us.s3.amazonaws.com/cache/a0/38/a038e6d3f342253c5ea3c057fe37b41f.png");
		addEmoji('😅', "http://emojipedia-us.s3.amazonaws.com/cache/28/10/281085c6e7d7d6059b8586abcb084621.png");
		addEmoji('😆', "http://emojipedia-us.s3.amazonaws.com/cache/fa/c1/fac171681f0df5976a66797e84b22946.png");
		addEmoji('😉', "http://emojipedia-us.s3.amazonaws.com/cache/5d/46/5d460ed78992a28f0ea9d7a6b7841f91.png");
		addEmoji('😊', "http://emojipedia-us.s3.amazonaws.com/cache/4a/bc/4abc340cf5d893ff4bf6ebc17b29c221.png");
		addEmoji('😋', "http://emojipedia-us.s3.amazonaws.com/cache/56/6c/566c9bb1eb9cee4ad2a8e267e46cff7d.png");
		addEmoji('😎', "http://emojipedia-us.s3.amazonaws.com/cache/80/9b/809b8e422f88d1b45305897877109d1c.png");
		addEmoji('😍', "http://emojipedia-us.s3.amazonaws.com/cache/6f/aa/6faaa08700cb0741e8ba3c5fed121449.png");
		addEmoji('😘', "http://emojipedia-us.s3.amazonaws.com/cache/c6/74/c674d5746f3f669964324fc1faf8e415.png");
		addEmoji('😗', "http://emojipedia-us.s3.amazonaws.com/cache/13/0a/130adeac887ca37241e2dcfa3eed24f1.png");
		addEmoji('😙', "http://emojipedia-us.s3.amazonaws.com/cache/5f/6a/5f6ae8c3e48cd60136d1f55b6adcda9c.png");
		addEmoji('😚', "http://emojipedia-us.s3.amazonaws.com/cache/48/f4/48f4f2bbd8206cb07a9bc576539bb4d2.png");
		addEmoji('☺', "http://emojipedia-us.s3.amazonaws.com/cache/a3/df/a3dfd7946b3a59f3cac159d0cdfd089d.png");
		addEmoji('🙂', "http://emojipedia-us.s3.amazonaws.com/cache/9f/64/9f64f990f3904ef6f88a06d4054ab8fc.png");
		addEmoji('🤗', "http://emojipedia-us.s3.amazonaws.com/cache/80/dd/80dd26f1aa392c86c98f2de2b51a62e3.png");
		addEmoji('😇', "http://emojipedia-us.s3.amazonaws.com/cache/33/92/3392edca1d4b41a67511b2595585d35d.png");
		addEmoji('🤔', "http://emojipedia-us.s3.amazonaws.com/cache/db/d5/dbd57bcbb3fff7245025a39061012200.png");
		addEmoji('😐', "http://emojipedia-us.s3.amazonaws.com/cache/68/90/689096bdc3bb25278d80d3aae4866c2e.png");
		addEmoji('😑', "http://emojipedia-us.s3.amazonaws.com/cache/d5/3d/d53d304bebc2c9b1f3b911a17d4c6a67.png");
		addEmoji('😶', "http://emojipedia-us.s3.amazonaws.com/cache/96/1b/961bd696d15dde1061d16bc78e4bff55.png");
		addEmoji('🙄', "http://emojipedia-us.s3.amazonaws.com/cache/41/af/41af1c0f05f9c6e1b0b4f789214454d9.png");
		addEmoji('😏', "http://emojipedia-us.s3.amazonaws.com/cache/3b/57/3b57c2efe844d5cae0f9982a264fa11a.png");
		addEmoji('😣', "http://emojipedia-us.s3.amazonaws.com/cache/31/03/3103485590734b493e03031d9d2a359e.png");
		addEmoji('😥', "http://emojipedia-us.s3.amazonaws.com/cache/de/a0/dea097989107ff735a28be71b32f35d6.png");
		addEmoji('😮', "http://emojipedia-us.s3.amazonaws.com/cache/dc/38/dc3892a20737ae1a2b14f91c1ed0d47f.png");
		addEmoji('🤐', "http://emojipedia-us.s3.amazonaws.com/cache/d3/aa/d3aa92eeb2e4836e00d9245479bccaf9.png");
		addEmoji('😯', "http://emojipedia-us.s3.amazonaws.com/cache/87/ba/87bafe0dd6b9d3bcaf7f8b925c8540b5.png");
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