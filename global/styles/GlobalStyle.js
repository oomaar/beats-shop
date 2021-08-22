import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const headerHeight = '3rem';
const hueColor = 206;

export const theme = {
    colors: {
        blackColor: `hsl(${hueColor}, 4%, 4%)`,
        blackColorAlt: `hsl(${hueColor}, 4%, 8%)`,
        titleColor: `hsl(${hueColor}, 4%, 95%)`,
        textColor: `hsl(${hueColor}, 4%, 75%)`,
        textColorLight: `hsl(${hueColor}, 4%, 65%)`,
        whiteColor: "#fff",
        bodyColor: `hsl(${hueColor}, 4%, 6%)`,
        containerColor: `hsl(${hueColor}, 4%, 10%)`,
        textGradient: `linear-gradient(hsl(${hueColor}, 4%, 24%), hsl(${hueColor}, 4%, 8%))`,
        scrollThumb: `hsl(${hueColor}, 4%, 16%)`,
        scrollThumbAlt: `hsl(${hueColor}, 4%, 20%)`
    },
    fonts: {
        bodyFont: `'Poppons', sans-serief`,
        biggestFontSize: `5rem`,
        biggerFontSize: `3.5rem`,
        bigFontSize: `2.5rem`,
        h2FontSize: `1.25rem`,
        h3FontSize: `1.125rem`,
        normalFontSize: `0.938rem`,
        smallFontSize: `0.813rem`,
        smallerFontSize: `0.75rem`,
        textLineHeight: `2rem`,
        fontWeight: {
            medium: 500,
            semiBold: 600
        }
    },
    // (min-width: 968px)
    resFonts: {
        biggestFontSize: `7.5rem`,
        biggerFontSize: `4.5rem`,
        bigFontSize: `4rem`,
        h2FontSize: `1.5rem`,
        h3FontSize: `1.25rem`,
        normalFontSize: `1rem`,
        smallFontSize: `0.875rem`,
        smallerFontSize: `0.813rem`,
    }
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: ${headerHeight} 0 0 0;
    font-family: ${({ theme }) => theme.fonts.bodyFont};
    font-size: ${({ theme }) => theme.fonts.normalFontSize};
    background-color: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.textColor};
  }

  h1,h2,h3 {
    color: ${({ theme }) => theme.colors.titleColor};
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  input {
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

// Section constants
export const Section = styled.section` padding: 4rem 0 2rem; `;

export const SectionTitle = styled.h3`
  background: ${({ gradient, theme }) => gradient && theme.colors.textGradient};
  font-size: ${({ theme }) => theme.fonts.biggerFontSize};
  margin-bottom: 2.5rem;
  text-align: center;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

// Main (For animations and images)
export const Main = styled.main`
  overflow: hidden;
`;

// Layout
export const Container = styled.div`
  max-width: 968px;
  margin: 0 1.5rem;
`;