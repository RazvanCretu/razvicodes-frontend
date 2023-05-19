import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, IconButton } from "@mui/material";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { styled, useTheme } from "@mui/material/styles";

const Bar = styled(AppBar)(({ theme }) => ({
  height: "7vh",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.text.main,
  backgroundColor: theme.palette.background.main,
  backgroundImage: "unset",
  [theme.breakpoints.down("sm")]: {
    bottom: 0,
    top: "unset",
  },
}));

const Links = styled(Box)(({ theme }) => ({
  display: "inline-block",
  margin: "0 5rem 0 0",
  "& .MuiButtonBase-root": {
    fontWeight: "bold",
  },
  "& .active": {
    color:
      theme.palette.mode === "dark" ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.5)",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 2rem 0 0",
  },
}));

const Navigation = () => {
  const theme = useTheme();

  return (
    <Bar component="nav">
      <IconButton
        sx={{ ml: "3.5rem" }}
        color="inherit"
        onClick={theme.toggler}
        size="small"
      >
        {theme.palette.mode === "dark" ? <BsMoonFill /> : <BsSunFill />}
      </IconButton>
      <Links>
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
      </Links>
    </Bar>
  );
};

export default Navigation;
