"use client"

import { useContext } from "react";
import { StoreContext } from "@/app/context";
import CartItems from "@/app/ui/cart/CartItems";

const DELIVERY_CHARGES = 25;

const OrderDetails = () => {
  const { cartData } = useContext(StoreContext);

  const booksToBuy = cartData.filter(book => book.type === 'Buy');
  const booksToRent = cartData.filter(book => book.type === 'Rent');

  const priceToBuy = booksToBuy.reduce((acc, book) => acc + book.sellPrice, 0);
  const priceToRent = booksToRent.reduce((acc, book) => acc + book.rentPrice, 0);
  const priceToPay = priceToBuy + priceToRent + DELIVERY_CHARGES;

  return (
    <div className="w-full bg-white rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl pb-4">Order Details</h2>
      <CartItems />
      {
        <ul>
          <li>Buying {booksToBuy.length} books for {priceToBuy} INR</li>
          <li>Renting {booksToRent.length} books for {priceToRent} INR</li>
          <li>{`Delivery charges ${DELIVERY_CHARGES} INR`}</li>
          <hr className="border-0 bg-gray-50 h-1 rounded-sm mt-2 mb-2" />
          <li>{`Total amount = ${priceToPay}`}</li>
        </ul>
      }
    </div>
  );
}

export default OrderDetails;
