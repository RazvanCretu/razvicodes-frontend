import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, IconButton } from "@mui/material";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const theme = useTheme();

  return (
    <AppBar
      component="nav"
      sx={{
        height: "7vh",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor:
          theme.palette.mode === "light" ? "secondary.light" : "secondary.dark",
        [theme.breakpoints.down("sm")]: {
          bottom: 0,
          top: "unset",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          m: "0 3rem",
        }}
      >
        <IconButton onClick={theme.toggler} size="small">
          {theme.palette.mode === "dark" ? <BsMoonFill /> : <BsSunFill />}
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "inline-block",
          m: "0 5rem",
          [theme.breakpoints.down("sm")]: {
            m: "0 auto",
          },
          "& .active": {
            color:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,.6)"
                : "rgba(0,0,0,.6)",
          },
        }}
      >
        <Button
          component={NavLink}
          to="/home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </Button>
        <Button
          component={NavLink}
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </Button>
        <Button
          component={NavLink}
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </Button>
      </Box>
    </AppBar>
  );
};

export default NavBar;
