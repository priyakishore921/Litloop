import Image from 'next/image';
import Link from 'next/link';
import { CurrencyRupeeIcon, } from "@heroicons/react/24/solid";
import AddToCart from "./AddToCart";

const BookCard = ({ book }) => {
  return (
    <div className='text-sm flex flex-col items-center rounded-xl bg-gray-50 p-2 m-2 shadow-sm'>
      <p className='text-purple-500 font-semibold'>{book.title}</p>
      <Link href={`store/${book.id}`}>
        <div className='m-2 h-auto'>
          <Image
            className='m-auto rounded-md'
            src={book.cover}
            alt={book.title}
            width={150}
            height={100}
            style={{ height: '200px', width: 'auto' }}
            priority={true}
          />
        </div>

        <div className='flex flex-col justify-center items-center'>
          <span className='text-sm'>Genre: {book.genre} </span>
          <span className='text-sm'>Author: {book.author} </span>
          <div className='flex flex-row gap-2 text-[10px]'>
            <span>{book.stock} in stock</span>
            <span>{book.pages} pages</span>
          </div>
          <p className='text-[10px]'>{
            book.isRented ?
              `Currently this book is rented by ${book?.renterIds?.length} customer` :
              'Currently no one has rented this book'
          }</p>
          <div className='flex items-center gap-4'>
            <div className="flex items-center gap-1 text-sm">
              Buy: <CurrencyRupeeIcon className="h-4 w-4 text-gray-600" />
              {book.sellPrice}
            </div>
            <div className="flex items-center gap-1 text-sm">
              Rent:
              <CurrencyRupeeIcon className="h-4 w-4 text-gray-600" />
              {book.rentPrice}
            </div>

          </div>
          <hr className='bg-gray-300 h-px w-3/4 mt-4 border-0 rounded-md' />
          <AddToCart book={{
            ...book,
            _id: book._id.toString()
          }} />
        </div>
      </Link>
    </div>
  );
}

export default BookCard;
