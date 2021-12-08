import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  navBar: {
    height: "80px !important",
    width: "100%",
    background: "#fff !important",
    boxShadow: "0 3px 6px rgb(9 30 66 / 3%), 0 2px 4px rgb(9 30 66 / 8%)",
    alignItems: "center",
    justifyContent: "center",
  },
  navBarLogo: {
    textAlign: "center !important",
    lineHeight: "7vh !important",
    color:'red'
  },
});

export default useStyle;
