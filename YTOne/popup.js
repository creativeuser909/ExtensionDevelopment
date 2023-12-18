const btn = document.querySelector(".copyLocationButton");
btn.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
	console.log(tab);
});