import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import CartItem from "../components/CartItem";

export function Cart() {

  useTitle("Cart");

  const url = "http://localhost:3004/products";

  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("cartData")) ||[]);

  const { data: products, loading, error } = useFetch(url);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  function handleRemoveCartItem() {
    
  }


  return (
    <>
      <div>
        <h2 className="text-3xl font-bold my-10">Cart Items: <span>{cartData.length}</span></h2>
      </div>
      <div className="container-cart-items">
      
      {products && products.map( (product) => {
      return <CartItem handleRemoveCartItem={handleRemoveCartItem} product={product} key={product.id}/>
    })}
      </div>
    </>
  )
}
