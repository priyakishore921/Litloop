import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap'>
     { books.map(book => {
      return (
        <BookCard key={book.id} book={book} />
      )
     })} 
    </div>
  );
}

export default BookList;
