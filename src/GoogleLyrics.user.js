'use strict';

// ==UserScript==
// @name        GoogleLyrics
// @namespace   https://github.com/etuden/GoogleLyrics
// @description Allow copying lyrics on Google
// @author      etuden
// @homepageURL https://github.com/etuden/GoogleLyrics
// @include     *google.co*
// @version     0.1.0
// @grant       none
// ==/UserScript==

const styles = `
.ruFbjf {
  user-select: text !important;
}
.lyrics-copy-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  position: absolute;
  right: 32px;
  background: transparent;
}
`;

(function() {
  const s = document.createElement('style');
  s.type = 'text/css';
  s.innerHTML = styles;
  (document.head || document.documentElement).appendChild(s);

  // Create a list of lyrics
  const e = document.getElementsByClassName('ujudUb');
  let lyricsList = [];
  for (let i = 0; i < e.length; i++) {
    if (e[i].className != 'ujudUb WRZytc') {
      lyricsList.push(e[i].innerText);
    }
  }
  console.log(lyricsList);

  const button = document.createElement('button');
  button.className = 'lyrics-copy-button';
  button.textContent = 'Copy';
  button.onclick = () => navigator.clipboard.writeText(lyricsList.join('\n'));

  document.getElementsByClassName('Oh5wg YB98bd')[0].prepend(button);
})();
