import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  heading: {
    textAlign: "center",
  },
  parentDiv: {
    // border: "1px solid black",
    display: "grid",
    gridRowGap: "20px",
    gridTemplateColumns: "auto auto auto auto",
    justifyContent: "space-around",
    alignItems: "center",
  },
  productCard: {
    height: "300px !important",
    width: "300px !important",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    // margin: "5px",
    // border: "1px solid black",
    // boxShadow: "0 3px 6px rgb(9 30 66 / 3%), 0 2px 4px rgb(9 30 66 / 8%)",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  cardImage: {
    border: "1px solid red",
    height: "200px !important",
    width: "200px !important",
        border: "1px solid black",
  },
  productCardImage: {
    height: "200px !important",
    width: "200px !important",
  },
  productCardDetails: {
    width: "100% !important",
    height: "400px",
    // boxShadow: "0 3px 6px rgb(9 30 66 / 3%), 0 2px 4px rgb(9 30 66 / 8%)",
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    whiteSpace: "nowrap !important",
    overflow: "hidden !important",
    textOverflow: "ellipsis !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  productName: {
    color: "#778899",
  },
  productPrice: {
    color: "#FF0000",
  },
  productDivRating: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  productRating: {
    // paddingRight: "100px",
  },
});

export default useStyle;
