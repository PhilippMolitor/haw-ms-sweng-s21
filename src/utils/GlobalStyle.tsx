import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* heading font */
@import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');

/* text body font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap');

@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}

html, body {
  font-size: 12pt;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  line-height: 1.5;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
}

ul,
ol {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  display: block;
  max-width: 100%;
}

article > * + * {
  margin-top: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}

[hidden] {
  display: none;
}

:focus {
  outline: 0;
}
`;
