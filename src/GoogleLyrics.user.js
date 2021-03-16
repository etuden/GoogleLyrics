'use strict';

// ==UserScript==
// @name        GoogleLyrics
// @namespace   https://github.com/etuden/GoogleLyrics
// @description Allow copying lyrics on Google
// @author      etuden
// @homepageURL https://github.com/etuden/GoogleLyrics
// @include     https://www.google.*
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
  right: 1.2em;
  background: transparent;
  border: none;
  border-radius: 50%;
  height: 48px;
  width: 48px;
}
.lyrics-copy-button svg {
  height: 20px;
  width: 20px;
}
`;

const contentCopy = `
<svg viewBox="0 0 24 24">
<path fill="#70757a" d="M19,21H8V7H19M19,5H8C6.9,5 6,5.9 6,7V21C6,22.1 6.9,23 8,23H19C20.1,23 21,22.1 21,21V7C21,5.9 20.1,5 19,5M16,1H4C2.9,1 2,1.9 2,3V17H4V3H16V1Z"/>
</svg>
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

  const buttonBackground = document.createElement('span');
  buttonBackground.className = 'animation';

  const isHover = e => e.parentElement.querySelector(':hover') === e;

  const button = document.createElement('button');
  button.className = 'lyrics-copy-button';
  button.innerHTML = contentCopy;
  button.onclick = () => {
    navigator.clipboard.writeText(lyricsList.join('\n'));
    (async () => {
      button.style.background = 'rgba(0,0,0,.2)';
      await new Promise(resolve => setTimeout(resolve, 100));
      button.style.background = isHover(button) ? 'rgba(0,0,0,.1)' : 'transparent';
    })();
  }
  button.onmouseenter = () => button.style.background = 'rgba(0,0,0,.1)';
  button.onmouseleave = () => button.style.background = 'transparent';

  document.getElementsByClassName('Oh5wg YB98bd')[0].prepend(button);
})();
