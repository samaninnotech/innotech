// import { Inter } from "next/font/google";
// import { createGlobalStyle } from "styled-components";

// const inter = Inter({ subsets: ["latin"] });

// const GlobalStyles = createGlobalStyle`
//   /***
//     The new CSS reset - version 1.8.3 (last updated 21.1.2023)
//     GitHub page: https://github.com/elad2412/the-new-css-reset
//   ***/
//   [data-nextjs-scroll-focus-boundary] {
//     display: contents;
//   }

//   /*
//     Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
//     - The "symbol *" part is to solve Firefox SVG sprite bug
//   */
//   *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
//     all: unset;
//     display: revert;
//   }

//   /* Preferred box-sizing value */
//   *,
//   *::before,
//   *::after {
//     box-sizing: border-box;
//   }

//   /* Reapply the pointer cursor for anchor tags */
//   a, button {
//     cursor: revert;
//   }

//   /* Remove list styles (bullets/numbers) */
//   ol, ul, menu {
//     list-style: none;
//   }

//   /* For images to not be able to exceed their container */
//   img {
//     max-inline-size: 100%;
//     max-block-size: 100%;
//   }

//   /* removes spacing between cells in tables */
//   table {
//     border-collapse: collapse;
//   }

//   /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
//   input, textarea {
//     user-select: auto;
//   }

//   /* revert the 'white-space' property for textarea elements on Safari */
//   textarea {
//     white-space: revert;
//   }

//   /* minimum style to allow to style meter element */
//   meter {
//     -webkit-appearance: revert;
//     appearance: revert;
//   }

//   /* preformatted text - use only for this feature */
//   pre {
//     all: revert;
//   }

//   /* reset default text opacity of input placeholder */
//   ::placeholder {
//     color: unset;
//   }

//   /* remove default dot (•) sign */
//   ::marker {
//     content: initial;
//   }

//   /* fix the feature of 'hidden' attribute.
//     display:revert; revert to element instead of attribute */
//   :where([hidden]) {
//     display: none;
//   }

//   /* revert for bug in Chromium browsers
//     - fix for the content editable attribute will work properly.
//     - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
//   :where([contenteditable]:not([contenteditable="false"])) {
//     -moz-user-modify: read-write;
//     -webkit-user-modify: read-write;
//     overflow-wrap: break-word;
//     line-break: after-white-space;
//     user-select: auto;
//   }

//   /* apply back the draggable feature - exist only in Chromium and Safari */
//   :where([draggable="true"]) {
//     -webkit-user-drag: element;
//   }

//   /* Revert Modal native behavior */
//   :where(dialog:modal) {
//     all: revert;
//   }

//   html {
//     height: 100%;
//     scroll-behavior: smooth !important;
//     font-family: ${inter.style.fontFamily};
//     font-weight: ${inter.style.fontWeight};
//     font-style: ${inter.style.fontStyle};
//     font-size: 16px;

//     @media print {
//       background-color: var(--white-color);
//       font-size: 12px;
//     }
//   }

//   body {
//     height: 100%;
//     // @media (min-width: 576px) {
//     // max-width: 576px;
//   }

//   @media (min-width: 768px) {
//     flex-direction: row;
//     max-width: 720px;
//   }

//   @media (min-width: 990px) {
//     max-width: 940px;
//   }

//   @media (min-width: 1200px) {
//     max-width: 1200px;
//   }

//   margin: 0 auto; 
//   }

//   button {
//     cursor: pointer;
//   }

//   a {

//     :hover {
//       text-decoration: underline;
//     }
//   }

//   h1, h2, h3, h4 {
//     font-weight: 700;
//     margin: 1em 0 1.25em;
//   }
//   h1 {
//     font-size: 2.25rem;
//     line-height: 1.2;
//   }
//   h2 {
//     font-size: 1.875rem;
//     line-height: 1.2;
//   }
//   h3 {
//     font-size: 1.5rem;
//     line-height: 1.4;
//   }
//   h4 {
//     font-size: 1.125rem;
//     font-weight: 500;
//     line-height: 1.4;
//   }

//   p {
//     line-height: 1.6;
//     margin: 0.25em 0 0.5em;
//   }
// `;

// export default GlobalStyles;
import { Inter } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const GlobalStyles = createGlobalStyle`
  /***
    The new CSS reset - version 1.8.3 (last updated 21.1.2023)
    GitHub page: https://github.com/elad2412/the-new-css-reset
  ***/
  [data-nextjs-scroll-focus-boundary] {
    display: contents;
  }

  /* Remove all default margin, padding, and border */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Reapply display for all elements to revert to their natural display */
  * {
    display: revert;
  }

  /* Specific resets for form elements */
  input, button, textarea, select {
    font: inherit;
  }

  /* Set default font styles */
  html {
    height: 100%;
    scroll-behavior: smooth !important;
    font-family: ${inter.style.fontFamily};
    font-weight: ${inter.style.fontWeight};
    font-style: ${inter.style.fontStyle};
    font-size: 16px;

    @media print {
      background-color: var(--white-color);
      font-size: 12px;
    }
  }

  body {
    height: 100%;
    background-color: white; /* Ensure a default background color */
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  /* Heading styles */
  h1, h2, h3, h4 {
    font-weight: 700;
    margin: 1em 0 1.25em;
  }
  h1 {
    font-size: 2.25rem;
    line-height: 1.2;
  }
  h2 {
    font-size: 1.875rem;
    line-height: 1.2;
  }
  h3 {
    font-size: 1.5rem;
    line-height: 1.4;
  }
  h4 {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.4;
  }

  /* Paragraph styles */
  p {
    line-height: 1.6;
    margin: 0.25em 0 0.5em;
  }
`;

export default GlobalStyles;
