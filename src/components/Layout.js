import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import NavBar from "./NavBar";

export const Layout = () => {
  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "secondary.main",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Outlet />
    </Container>
  );
};
