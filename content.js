(function() {
  let emojiMap;
  fetch(chrome.runtime.getURL("res.json"))
    .then(response => response.json())
    .then(response => {
      emojiMap = Object.entries(response);
    })
    .then(() => main());

  function main() {
    const nodes = document.querySelectorAll("p,span,h1,h2,h3,h4,h5,h6");
    for (const node of nodes) {
      let i = 0;
      (function mainLoop() {
        if (i < emojiMap.length) {
          const [ASCII, imgURL] = emojiMap[i];
          if (
            node.parentElement &&
            node.innerText &&
            node.innerText.includes(ASCII)
          ) {
            node.innerHTML = node.innerHTML.replace(
              new RegExp(ASCII, "g"),
              `<img src="${chrome.runtime.getURL(imgURL)}" width=15 height=15>`
            );
          }
          ++i;
          setTimeout(mainLoop, 0);
        }
      })();
    }
  }
})();
