import { getAllBooks } from "@/app/db/queries/index";
import BookList from '../ui/books/BookList';

const BooklistPage = async () => {

  const books = await getAllBooks();
  console.log(books);

  return (
    <BookList books={books} />
  );
}

export default BooklistPage;
