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
  const animate = (i) => `slideInRight 1s ease-in ${0.25 * i}s forwards`;

  return (
    <MUIList>
      {articles.map(
        ({ id, attributes: { title, publishedAt, slug } }, i, arr) => (
          <ListItem sx={{ animation: animate(i) }} key={id}>
            <Card
              sx={{
                display: "flex",
                padding: "1rem",
                "& .MuiDivider-root": { margin: { xs: "0 .5rem 0 .5rem" } },
                "& .MuiTypography-h4": { fontSize: { xs: "1.5rem" } },
              }}
            >
              <Box>
                <Typography variant="h4">{title}</Typography>
                <Typography
                  component={Moment}
                  sx={{ fontStyle: "italic" }}
                  format="YY MMM dddd Do"
                >
                  {publishedAt}
                </Typography>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0 1rem 0 5rem" }}
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
