import React from 'react';
const { ThemeProvider } = require("styled-components")

const theme = {
  colors: {
    p: "#1976d2",
    pd: "#004ba0",
    pl: "#63a4ff",
    s: "#ef6c00",
    sd: "#b53d00",
    sl: "#ff9d3f",
  },
  fonts: {
    titillium: ['Titillium Web', "sans-serif"],
  }
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)