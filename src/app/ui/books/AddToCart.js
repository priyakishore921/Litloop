"use client"
import { ShoppingCartIcon, } from "@heroicons/react/24/solid";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { StoreContext } from "@/app/context";

const AddToCart = ({book}) => {

  const { cartData, setCartData } = useContext(StoreContext);

  const handleCart = (e, action) => {
    e.preventDefault();
    console.log(book);

    const newData = {...book, type: action};
    setCartData([...cartData, newData]);

    console.log(cartData);
    
    toast.success(<div className="text-sm text-purple-500">{`Added ${book.title} to the cart`}</div>, {
      autoClose: 1000,
      position: 'top-right'
    });
  }

  return (
    <div className='flex'>
      <button
        className='cursor-pointer p-2 m-2 bg-purple-500 hover:bg-purple-700 rounded-md text-sm text-white flex flex-row gap-1 items-center'
        onClick={(e) => handleCart(e, 'Buy')}
      >
        <ShoppingCartIcon className='h-6 w-4' />Buy
      </button>
      <button
        className='cursor-pointer p-2 m-2 bg-purple-500 hover:bg-purple-700 rounded-md text-sm text-white flex flex-row gap-1 items-center'
        onClick={(e) => handleCart(e, 'Rent')}
      >
        <ShoppingCartIcon className='h-6 w-4' />Rent
      </button>
    </div>
  );
}

export default AddToCart;
