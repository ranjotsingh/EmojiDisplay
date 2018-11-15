(function() {
  let emojiList;
  fetch(chrome.runtime.getURL("res.json"))
    .then(response => response.json())
    .then(response => {
      emojiList = new Map(Object.entries(response));
      emojiList = new Map([...emojiList].filter((k, v) => k[0].length <= 2));
    })
    .then(() => main());

  function main() {
    const nodes = document.querySelectorAll("p,span,h1,h2,h3,h4,h5,h6");

    function mainLoop() {
      for (const node of nodes) {
        for (const [ASCII, imgURL] of emojiList.entries()) {
          if (
            node.parentElement &&
            node.innerText &&
            node.innerText.includes(ASCII) &&
            !node.innerHTML.includes('{"')
          ) {
            node.innerHTML = node.innerHTML.replace(
              new RegExp(ASCII, "g"),
              `<img src="${chrome.runtime.getURL(imgURL)}" width=15 height=15>`
            );
          }
        }
      }
    }
    setTimeout(mainLoop, 0);
  }
})();
