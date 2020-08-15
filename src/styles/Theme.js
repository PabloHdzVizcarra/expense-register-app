import React from 'react';
const { ThemeProvider } = require("styled-components")

const theme = {
  colors: {
    p: "#1675d1",
    p1: "#1880e7",
    p2: "#2f8ce9",
    p3: "#4699ec",
    p4: "#5da6ee",
    p5: "#75b3f0",
    p6: "#8cbff3",
    p7: "#a3ccf5",
    p8: "#bad9f8",
    p9: "#d1e6fa",
    p10: "#e8f2fd",
    s: "#ffea29",
    s0: "yellow",
    s1: "#ffe600",
    s2: "#ffe81a",
    s3: "#ffeb33",
    s4: "#ffeb3b",
    s5: "#ffed4d",
    s6: "#fff066",
    s7: "#fff280",
    s8: "#fff599",
    s9: "#fff7b3",
    s10: "#fffacc",
    bg: "#ffffff",
    g: "#9494b8"
  },
  fonts: {
    titillium: ['Titillium Web', "sans-serif"],
  }
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)