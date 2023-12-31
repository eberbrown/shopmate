import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

  const [hidden, setHidden] = useState(true);

  const activeClass = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0";

  const inactiveClass = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0";

  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem("cartData")) ||[]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <nav className="bg-white mx-2 z-20 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <Link to="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Shoping Cart</span>
        </Link>

        <div className="flex md:order-2">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Cart: <span>{cartData.length}</span></button>
          <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false"><span className="sr-only">Open main menu</span><svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></button>
        </div>

        <div className={`${hidden ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass} end aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Cart</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}
