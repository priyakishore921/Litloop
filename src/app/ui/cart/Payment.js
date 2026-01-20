"use client"
import { useRouter } from 'next/navigation';

const Payment = () => {

  const router = useRouter();

  const makePayment = () => {
    router.push('/store/track-order');
  }

  return (
    <div className='w-full max-w-xs'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-2'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='card'
          >
            Card Number
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-white'
            id="card"
            type='text'
            placeholder='Enter your card number'
          />
        </div>

        <div className='mb-2'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name on the card
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-white'
            id="name"
            type='text'
            placeholder='Enter the name on the card'
          />
        </div>

        <div className='mb-2'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='cvv'
          >
            CVV
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-white'
            id="cvv"
            type='password'
            placeholder='Enter your cvv'
          />
        </div>

        <div className='mb-2'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='expiry'
          >
            CVV
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-white'
            id="expiry"
            type='date'
            placeholder='Enter the expiry date of card'
          />
        </div>

        <div className='flex gap-3 items-center'>
          <button
            className='bg-purple-500 text-sm rounded px-4 py-2 text-white font-semibold mt-2 cursor-pointer'
            type='button'
            onClick={makePayment}
          >Make Payment</button>
          <button
            className='text-blue-500 text-sm font-semibold py-2 mt-2 cursor-pointer'
          >Reset Values</button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
