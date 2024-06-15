"use client";

import { THEME_ID, ThemeProvider, createTheme } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { themeApp } from "./theme";

const theme = createTheme(themeApp);

const ProviderTheme: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ProviderTheme;
