import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import useStyle from "./style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
function Products(props) {
  // fetching the data from API
  const fetchProductsWithApi = async () => {
    const rawAPI = await fetch("https://fakestoreapi.com/products");
    const API = await rawAPI.json();
    // sending API data to redux state
    props.addProductsWithApi(API);
  };
  useEffect(() => {
    fetchProductsWithApi();
  }, []);
  const classes = useStyle();

  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className={classes.heading}>Hii I am Products</h1>
      <div className={classes.parentDiv}>
        {props.data.map((arrVal) => {
          return (
            <Link to={`/products/${arrVal.id}`} key={arrVal.id}>
              <Card
                sx={{
                  display: { sm: 1, md: 3, xl: 4 },
                  width: "300px",
                  height: "425px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  textDecoration: "none !important",
                }}
                key={arrVal.id}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={arrVal.image}
                    alt="green iguana"
                    sx={{
                      width: "300px",
                      height: "300px",
                      objectFit: "contain",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {arrVal.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                    >
                      $&nbsp;{arrVal.price}
                    </Typography>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={arrVal.rating.rate}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
