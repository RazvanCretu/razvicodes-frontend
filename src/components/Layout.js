import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { Container, AppBar, Box, Button, IconButton } from "@mui/material";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const Layout = () => {
  const theme = useTheme();
  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          height: "7vh",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:
            theme.palette.mode === "light"
              ? "secondary.light"
              : "secondary.dark",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", m: "0 3rem" }}>
          <IconButton onClick={theme.toggler} size="small">
            {theme.palette.mode === "dark" ? <BsMoonFill /> : <BsSunFill />}
          </IconButton>
        </Box>
        <Box m="0 3rem">
          <Button component={NavLink} to="/home" className="active">
            Home
          </Button>
          <Button component={NavLink} to="/blog" className="active">
            Blog
          </Button>
          <Button component={NavLink} to="/about" className="active">
            About
          </Button>
        </Box>
      </AppBar>
      <Outlet />
    </Container>
  );
};
