import { styled, keyframes } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

const glitch = keyframes`
    0% {
        clip-path: var(--button-clip-1);
    }
    2%, 8% {
        clip-path: var(--button-clip-2);
        transform: translate(calc(var(--button-shimmy-distance) * -1%), 0);
    }
    6% {
        clip-path: var(--button-clip-2);
        transform: translate(calc(var(--button-shimmy-distance) * 1%), 0);
    }
    9% {
        clip-path: var(--button-clip-2);
        transform: translate(0, 0);
    }
    10% {
        clip-path: var(--button-clip-3);
        transform: translate(calc(var(--button-shimmy-distance) * 1%), 0);
    }
    13% {
        clip-path: var(--button-clip-3);
        transform: translate(0, 0);
    }
    14%, 21% {
        clip-path: var(--button-clip-4);
        transform: translate(calc(var(--button-shimmy-distance) * 1%), 0);
    }
    25% {
        clip-path: var(--button-clip-5);
        transform: translate(calc(var(--button-shimmy-distance) * 1%), 0);
    }
    30% {
        clip-path: var(--button-clip-5);
        transform: translate(calc(var(--button-shimmy-distance) * -1%), 0);
    }
    35%, 45% {
        clip-path: var(--button-clip-6);
        transform: translate(calc(var(--button-shimmy-distance) * -1%));
    }
    40% {
        clip-path: var(--button-clip-6);
        transform: translate(calc(var(--button-shimmy-distance) * 1%));
    }
    50% {
        clip-path: var(--button-clip-6);
        transform: translate(0, 0);
    }
    55% {
        clip-path: var(--button-clip-7);
        transform: translate(calc(var(--button-shimmy-distance) * 1%), 0);
    }
    60% {
        clip-path: var(--button-clip-7);
        transform: translate(0, 0);
    }
    31%, 61%, 100% {
        clip-path: var(--button-clip-4);
    }`;

const Button = styled(ButtonBase)(({ theme, pv, ph, c, f, hideTag }) => ({
  "--button-border": "4px",
  "--button-font-size": f || "1.4rem",
  "--button-padding-v": pv || "0.9rem",
  "--button-padding-h": ph || "2.5rem",
  "--tag-font-size": ".55rem",
  "--button-cutout": c || "1.1rem",
  "--button-shadow-primary": "cyan",
  "--button-shadow-secondary": "yellow",
  "--button-shimmy-distance": 5,
  "--bg": "#ff003c",
  "--button-clip-1":
    "polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%)",
  "--button-clip-2":
    "polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%)",
  "--button-clip-3":
    "polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%)",
  "--button-clip-4":
    "polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0)",
  "--button-clip-5":
    "polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0)",
  "--button-clip-6":
    "polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%)",
  "--button-clip-7":
    "polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%)",
  "--button-clip":
    "polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 80% 90%, 80% 100%, var(--button-cutout) 100%, 0 calc(100% - var(--button-cutout)))",
  backgroundColor: "#ff003c",
  background: "transparent !important",
  textTransform: "uppercase",
  fontSize: "var(--button-font-size)",
  fontWeight: 700,
  letterSpacing: "2px",
  padding: "var(--button-padding-v) var(--button-padding-h)",
  outline: "transparent",
  position: "relative",
  transition: "background .2s",
  color: "white !important",
  zIndex: 2,
  "::before": {
    background: "var(--button-shadow-primary)",
    transform: "translateX(var(--button-border))",
  },
  "::after": {
    background: "var(--bg) !important",
  },
  "::before, ::after": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    clipPath: "var(--button-clip)",
    zIndex: -1,
  },
  ":hover": {
    "span:first-of-type": {
      display: "block",
    },
  },
}));

const GlitchText = styled("span")(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  background: "var(--button-shadow-primary)",
  textShadow:
    "2px 2px var(--button-shadow-primary), -2px -2px var(--button-shadow-secondary)",
  clipPath: "var(--button-clip)",
  animation: `${glitch} 4s infinite`,
  padding: "var(--button-padding-v) var(--button-padding-h)",
  display: "none",
  "::after": {
    content: "''",
    position: "absolute",
    top: "calc(var(--button-border) * 1)",
    right: "calc(var(--button-border) * 1)",
    bottom: "calc(var(--button-border) * 1)",
    left: "calc(var(--button-border) * 1)",
    clipPath: "var(--button-clip)",
    backgroundColor: "var(--bg)",
    zIndex: "-1",
  },
}));

const Tag = styled("span")(({ theme }) => ({
  position: "absolute",
  letterSpacing: "1px",
  bottom: "-5%",
  right: "6%",
  fontWeight: "normal",
  color: "#000",
  fontSize: "var(--tag-font-size)",
}));

const CyberButton = ({ children, errText, hideTag, ...props }) => {
  return (
    <Button {...props}>
      {children}
      <GlitchText>{errText}</GlitchText>
      {!hideTag && <Tag>R25</Tag>}
    </Button>
  );
};

export default CyberButton;
