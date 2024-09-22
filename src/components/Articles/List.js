import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, Typography, ButtonBase, Box } from "@mui/material";
import Moment from "react-moment";
import "moment-timezone";

Moment.globalLocal = true;

const ArticlesList = ({ articles }) => {
  const animate = (i) => `slideInRight 1.25s ease-in ${0.25 * i}s forwards`;

  console.log(articles);

  return (
    <List sx={{ overflow: "hidden", minWidth: "100%" }}>
      {articles.map(({ documentId, title, publishedAt, slug }, i, arr) => (
        <ListItem
          sx={{
            opacity: "0%",
            transform: "translateX(100%)",
            animation: animate(i),
            display: "inline-block",
            borderBottom: "1px solid",
            borderColor: "text.main",
            marginBottom: "1rem",
            "::after": {
              content: "' '",
              width: "100%",
              height: "6px",
              display: "block",
              backgroundColor: "text.main",
              position: "relative",
              transform: "translateY(100%)",
              clipPath:
                "polygon(60% 0, calc(60% + 6px) 100%, 100% 100%, 100% 0)",
            },
          }}
          disableGutters
          disablePadding
          key={documentId}
        >
          <Box
            sx={{
              display: "flex",
              padding: "0 1rem",
              minWidth: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              "& .MuiTypography-h4": {
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              },
            }}
          >
            <Box>
              <Typography variant="h4">{title}</Typography>
              <Typography
                component={Moment}
                sx={{
                  fontStyle: "italic",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
                format="YY MMM dddd Do"
              >
                {publishedAt}
              </Typography>
            </Box>
            <ButtonBase
              sx={{
                fontWeight: "bold",
                padding: ".5rem 1rem",
              }}
              variant="contained"
              component={Link}
              to={slug}
            >
              Read
            </ButtonBase>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ArticlesList;
