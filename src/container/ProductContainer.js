import { connect } from "react-redux";
import Products from "../components/Products/Products";
import { setProducts } from "../service/actions/action";

const mapStateToProps = (DataWillFlowToComponent)=>({
    data:DataWillFlowToComponent.productReducer.products,
});

const mapDispatchToProps = (dispatch)=>
({
        addProductsWithApi: (productWithApi)=>dispatch(setProducts(productWithApi)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Products)