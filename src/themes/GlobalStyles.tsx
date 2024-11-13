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
    padding-top: 150px;
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

  body.sidebar-open {
  overflow: hidden; /* Prevent scroll */
  padding-right: 1px; /* Optional: accounts for any scrollbar width */
  transform: translateX(-360px); /* Adjust based on sidebar width */
  transition: transform 0.3s ease, padding-right 0.3s ease; /* Added transition for padding-right */
}

// .sidebar-open .main-content {
//   transition: transform 0.3s ease; /* Added to make sure content also moves smoothly */
// }
`;

export default GlobalStyles;
