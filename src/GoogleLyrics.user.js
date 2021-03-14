"use strict";

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
`;

(function() {
	const s = document.createElement('style');
  s.type = 'text/css';
  s.innerHTML = styles;
  (document.head || document.documentElement).appendChild(s)
})();
