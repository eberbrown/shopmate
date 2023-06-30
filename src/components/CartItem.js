import img from "../assets/1001.jpeg";

export default function CartItem({handleRemoveCartItem, product}) {

  const { id, img, name, price } = product;
  
  return (
    <>
      <div className="cart-item flex justify-between items-center mx-5 h-32 px-3 shadow mt-6">
      <img src={require("../assets/" + img)} alt="" className="h-24" />
      <p className="" >{name}</p>
      <p className="" >${price}</p>
      <button className="bg-red-600 px-4 py-2 text-white rounded-lg" onClick={() => handleRemoveCartItem(id)}>Remove</button>
      </div>
    </>
  )
}
