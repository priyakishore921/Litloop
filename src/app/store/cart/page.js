import OrderDetails from "@/app/ui/cart/OrderDetails";
import Payment from "@/app/ui/cart/Payment";

const Cart = () => {
  return (
    <div className='flex flex-col gap-4 m-4'>
      <h1>Welcome Mr.X!</h1>
      <p>
        Thank you for your interest!
        Please complete the checkout by making the payment for your order.
      </p>
      <div className="flex flex-col">
        <OrderDetails />
        <Payment />
      </div>
    </div>
  );
}

export default Cart;
