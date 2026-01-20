"use client"
import { useContext } from "react";
import { StoreContext } from "@/app/context";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartItems = () => {
  const { cartData, setCartData } = useContext(StoreContext);

  const handleDeleteItemFromCart = (item) => {
    const newData = cartData.filter(book => !(book.id === item.id && book.type === item.type));
    setCartData(newData);
  }

  return (
    <>
      <div>
        {cartData.map(item => {
          console.log(item);
          return (

            <div className="flex flex-row gap-4 items-baseline justify-between mb-2">
              <h1 className="text-md pb-4">{item.title} ({item.type})</h1>
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => handleDeleteItemFromCart(item)}
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>

          )
        })}
      </div>
      <hr className="border-0 h-0.5 bg-gray-50 mb-4" />
    </>

  );
}

export default CartItems;
