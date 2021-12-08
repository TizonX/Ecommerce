import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia, Typography, Button } from "@mui/material";

function SingleProduct(props) {
  const { productID } = useParams();
  const { id, image, title, price, description } = props.data;
  const fetchSingleItemApi = async () => {
    const rawAPI = await fetch(
      `https://fakestoreapi.com/products/${productID}`
    );
    const API = await rawAPI.json();
    props.singleProductApi(API);
  };
  useEffect(() => {
    if (productID && productID !== "") fetchSingleItemApi();
  }, [productID]);

  useEffect(() => {
    props.singleProductApi(productID);
  }, [productID]);
  return (
    <div>
      <h1>single product</h1>

      <Box
        component="div"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          // border: "1px solid black",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "500px",
            height: "500px",
            // border: "1px solid black"
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ width: "500px", height: "500px", objectFit: "contain" }}
          ></CardMedia>
        </Box>
        <Box
          component="div"
          sx={{
            width: "400px",
            height: "500px",
            textAlign: "center",
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            style={{ fontSize: "25px", fontWeight: "800" }}
          >
            {title}
          </Typography>
          <Typography
            component="h1"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              wordBreak: "keep-all",
              color: "gray",
            }}
          >
            {description}
          </Typography>
          <Typography
            component="h1"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: "100%",
              height: "40px",
              lineHeight: "40px",
            }}
          >
            {"$"+price}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default SingleProduct;
