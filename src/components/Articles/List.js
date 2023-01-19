import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {
  List as MUIList,
  ListItem,
  Card,
  CardActions,
  Divider,
  Typography,
  Button,
  Box,
} from "@mui/material";
import "moment-timezone";

Moment.globalLocal = true;

const List = ({ articles }) => {
  const animate = (i) => `slideInRight 1.25s ease-in ${0.25 * i}s forwards`;

  return (
    <MUIList sx={{ overflow: "hidden", minWidth: "100%" }}>
      {articles.map(
        ({ id, attributes: { title, publishedAt, slug } }, i, arr) => (
          <ListItem
            sx={{
              opacity: "0%",
              transform: "translateX(100%)",
              animation: animate(i),
            }}
            disableGutters
            key={id}
          >
            <Card
              sx={{
                display: "flex",
                padding: "1rem",
                minWidth: "100%",
                justifyContent: "space-between",
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
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0 1rem 0 auto" }}
              />
              <CardActions>
                <Button variant="contained" component={Link} to={slug}>
                  Read
                </Button>
              </CardActions>
            </Card>
          </ListItem>
        )
      )}
    </MUIList>
  );
};

export default List;
