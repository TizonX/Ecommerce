import { connect } from "react-redux";
import SingleProduct from "../components/Products/SingleProduct";
import {selectProduct} from "../service/actions/action"

const mapStateToProps = (singleApiData)=>({
    data:singleApiData.selectProductsReducer,
});

const mapDispatchToProps = (dispatch)=>
({
        singleProductApi:(sendData)=>dispatch(selectProduct(sendData)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)