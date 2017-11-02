var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

		showEmojis();
    }
}

function showEmojis() {
	addEmoji('😀', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/grinning-face_1f600.png");
	addEmoji('😁', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/grinning-face-with-smiling-eyes_1f601.png");
	addEmoji('😂', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/face-with-tears-of-joy_1f602.png");
	addEmoji('😃', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/smiling-face-with-open-mouth_1f603.png");
	addEmoji('😄', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png");
	addEmoji('😅', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/smiling-face-with-open-mouth-and-cold-sweat_1f605.png");
	addEmoji('😆', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png");
	addEmoji('😉', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/winking-face_1f609.png");
	addEmoji('😊', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/smiling-face-with-smiling-eyes_1f60a.png");
	addEmoji('😋', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/face-savouring-delicious-food_1f60b.png");
	addEmoji('😎', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/smiling-face-with-sunglasses_1f60e.png");
	addEmoji('😍', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/smiling-face-with-heart-shaped-eyes_1f60d.png");
	addEmoji('😘', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/face-throwing-a-kiss_1f618.png");
	addEmoji('😗', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/kissing-face_1f617.png");
	addEmoji('😙', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/kissing-face-with-smiling-eyes_1f619.png");
	addEmoji('😚', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/kissing-face-with-closed-eyes_1f61a.png");
	addEmoji('☺', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/white-smiling-face_263a.png");
	addEmoji('🙂', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/slightly-smiling-face_1f642.png");
	addEmoji('🤗', "https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/114/hugging-face_1f917.png");
    /*
	addEmoji('😇', "");
	addEmoji('🤔', "");
	addEmoji('😐', "");
	addEmoji('😑', "");
	addEmoji('😶', "");
	addEmoji('🙄', "");
	addEmoji('😏', "");
	addEmoji('😣', "");
	addEmoji('😥', "");
	addEmoji('😮', "");
	addEmoji('🤐', "");
	addEmoji('😯', "");
	addEmoji('😪', "");
	addEmoji('😫', "");
	addEmoji('😴', "");
	addEmoji('😌', "");
	addEmoji('🤓', "");
	addEmoji('😛', "");
	addEmoji('😜', "");
	addEmoji('😝', "");
	addEmoji('☹', "");
	addEmoji('🙁', "");
	addEmoji('😒', "");
	addEmoji('😓', "");
	addEmoji('😔', "");
	addEmoji('😕', "");
	addEmoji('😖', "");
	addEmoji('🙃', "");
	addEmoji('😷', "");
	addEmoji('🤒', "");
	addEmoji('🤕', "");
	addEmoji('🤑', "");
	addEmoji('😲', "");
	addEmoji('😞', "");
	addEmoji('😟', "");
	addEmoji('😤', "");
	addEmoji('😢', "");
	addEmoji('😭', "");
	addEmoji('😦', "");
	addEmoji('😧', "");
	addEmoji('😨', "");
	addEmoji('😩', "");
	addEmoji('😬', "");
	addEmoji('😰', "");
	addEmoji('😱', "");
	addEmoji('😳', "");
	addEmoji('😵', "");
	addEmoji('😡', "");
	addEmoji('😠', "");
	addEmoji('👿', "");
	addEmoji('😈', "");

	addEmoji('💯', "");
    */
}

function addEmoji(ASCII, imgURL) {
	if (node.nodeType === Node.TEXT_NODE) {
		var text = node.nodeValue;
		var part = splitWithTail(text, ASCII);
		var regex = new RegExp(ASCII, "g");
		var old = node.parentElement;

		var replacedText = text.replace(regex, img);
		if (replacedText !== text && old !== null) {
			var img = new Image(20, 20);
			img.src = imgURL;
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
