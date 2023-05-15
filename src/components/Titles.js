import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontWeight: "bold",
  "::after": {
    content: '" "',
    width: "100%",
    height: "6px",
    display: "block",
    backgroundColor: theme.palette.text.main,
    clipPath:
      "polygon(0 0, 0 100%, 10% 100%, calc(10% + 4px) 2px, 100% 2px, 100% 0)",
  },
  "&.MuiTypography-h1": {},
}));

export const Title1 = ({ ...props }) => (
  <StyledTypography variant="h1" {...props} />
);
export const Title2 = ({ ...props }) => (
  <StyledTypography sx={{ width: "90%" }} variant="h2" {...props} />
);
export const Title3 = ({ ...props }) => (
  <StyledTypography sx={{ width: "80%" }} variant="h3" {...props} />
);
export const Title4 = ({ ...props }) => (
  <StyledTypography sx={{ width: "70%" }} variant="h4" {...props} />
);
export const Title5 = ({ ...props }) => (
  <StyledTypography sx={{ width: "60%" }} variant="h5" {...props} />
);
export const Title6 = ({ ...props }) => (
  <StyledTypography
    sx={{ fontWeight: "normal", width: "50%" }}
    variant="h6"
    {...props}
  />
);
