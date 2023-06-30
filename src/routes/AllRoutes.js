import { Route, Routes } from "react-router-dom";
import { ProductList, Cart } from "../pages";

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={ <ProductList /> } />
            <Route path="/cart" element={ <Cart /> } />
        </Routes>
    </>
  )
}
