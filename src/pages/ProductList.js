import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

export function ProductList() {

  useTitle("Home");

  const url = "http://localhost:3004/products";

  const { data: products, loading, error } = useFetch(url);

  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("cartData")) ||[]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  function handleAddToCart(id) {
    setCartData([...cartData, id]);
  }

  return (
    <>
      <div className="card-container flex flex-wrap mt-6 items-center mx-3 justify-center">
        { loading && <p>Loading...</p> }
        { error && <p>{error}</p> }
        {products &&
          products.map((product) => {
            return <ProductCard product={product} key={product.id} handleAddToCart={handleAddToCart}/>;
          })}
      </div>
    </>
  );
}
