function ytscript(indexNum) {
	var gridRow = document.querySelectorAll(
		"ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer"
	);
	var contentDiv = gridRow[indexNum].querySelectorAll(
		"#content.style-scope.ytd-rich-item-renderer"
	);
	if (contentDiv.length > 0) {
		var rect = contentDiv[1].getBoundingClientRect();
		var centerX = rect.left + rect.width / 2;
		var centerY = rect.top + rect.height / 2;
	}
	if (centerY < 190) {
		return ytscript(indexNum + 1);
	}
	return [centerX, centerY];
}
var result = ytscript(0);
var r1 = Math.floor(result[0]).toString();
var r2 = Math.floor(result[1]).toString();
var formattedCoordinates = r1 + " " + r2;
var textarea = document.createElement("textarea");
textarea.value = formattedCoordinates;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
document.body.removeChild(textarea);
