import { Link } from "react-router-dom";


export default function ProductCard({ product, handleAddToCart }) {

  const { id, name, price, in_stock, img } = product;

 

  return (
    
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-3">
    <Link to="#">
        <img className="p-4 rounded-t-md max-h-64 w-full bg-cover" src={require("../assets/" + img)} alt={`img of product ${name}`} />
    </Link>
    <div className="px-4 pb-5">
        <Link to="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">{name}</h5>
        </Link>
        <div className="flex items-center justify-between mt-7">
            <span className="text-xl font-bold text-gray-900">${price}</span>
            <Link to="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center" onClick={() => handleAddToCart(id)}>Add to cart</Link>
        </div>
    </div>
</div>

  )
}
