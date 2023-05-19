import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export const Layout = () => {
  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "background.main",
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <Outlet />
    </Container>
  );
};
