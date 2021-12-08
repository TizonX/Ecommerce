import React from "react";

import Header from "./components/Header/Header";
import ProductContainer from "./container/ProductContainer";
import SingleProductContainer from "./container/SingleProductContainer";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route  path="/" element={<ProductContainer/>}></Route>
        <Route  path="/products/:productID" element={<SingleProductContainer/>}></Route>
        <Route>404 page not found</Route>
      </Routes >

    </div>
  );
}

export default App;
{/* <Route path="/product/:productID" element={<SingleProduct/>}> */}