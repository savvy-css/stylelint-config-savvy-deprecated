/* eslint-env node */
const invalidCSS = `

#id-selector {
  color: red;
}

/**
 * Multiple declarations on one line
 */
.selector-1 { background-color: red; border-radius: 0.5em; }

`;

module.exports = invalidCSS.trim();
