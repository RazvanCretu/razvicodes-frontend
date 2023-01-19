import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const Span = styled("span")(({ theme }) => ({
  display: "block",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  position: "relative",
  animation: "rotate 1s linear infinite",
  "&::before, &::after": {
    content: "''",
    boxSizing: "border-box",
    position: "absolute",
    inset: "0px",
    borderRadius: "50%",
    border: "5px solid var(--text-secondary)",
    animation: "prixClipFix 2s linear infinite",
  },
  "&::after": {
    borderColor: "var(--active)",
    animation:
      "prixClipFix 2s linear infinite, rotate 0.5s linear infinite reverse",
    inset: "6px",
  },
  "@keyframes rotate": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  "@keyframes prixClipFix": {
    "0%": { clipPath: "polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)" },
    "25%": { clipPath: "polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)" },
    "50%": {
      clipPath: "polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)",
    },
    "75%": { clipPath: "polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)" },
    "100%": { clipPath: "polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)" },
  },
}));

const Loader = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <Span />
    </Container>
  );
};

export default Loader;
