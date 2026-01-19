import { getAllBooks } from "../lib/fake-data";
import BookList from '../ui/books/BookList';

const BooklistPage = () => {

  const books = getAllBooks();
  console.log(books);

  return (
    <BookList books={books} />
  );
}

export default BooklistPage;
