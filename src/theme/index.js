import React, { useState, useEffect, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { light, dark } from "./palette";
import CssBaseline from "@mui/material/CssBaseline";
import Globals from "./globals";
import BlenderProBook from "../fonts/Blender-Pro-Book.ttf";
import Cyberpunk from "../fonts/Cyberpunk.otf";

const fonts = `@font-face {
  font-family: "Blender";
  font-weight: 400;
  font-style: normal;
  src: local('Blender-Pro-Book'), url(${BlenderProBook}) format('truetype');
}

@font-face {
  font-family: "Cyberpunk";
  font-weight: 400;
  font-style: normal;
  src: local('Cyberpunk'), url(${Cyberpunk}) format('opentype');
}
`;

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (!mounted) setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const themeMode = useMemo(
    () =>
      createTheme({
        ...(theme === "light" ? light : dark),
        typography: {
          fontFamily: '"Blender", "Roboto","Cyberpunk"',
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `${fonts}`,
          },
        },
      }),
    [theme]
  );

  const toggler = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  if (!mounted) return <div style={{ visibility: "hidden" }} />;

  console.log(themeMode);
  return (
    <ThemeProvider
      theme={{
        ...themeMode,
        toggler,
      }}
    >
      <CssBaseline />
      {Globals}
      {children}
    </ThemeProvider>
  );
};

const isDefaultDark = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const getDefaultTheme = () => {
  // run client-side only
  if (typeof window !== "undefined") {
    const localTheme = window.localStorage.getItem("theme");
    const browserTheme = isDefaultDark() ? "dark" : "light";
    return localTheme || browserTheme;
  }
};

export default Theme;
