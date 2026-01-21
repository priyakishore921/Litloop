import { getBookById } from "@/app/db/queries/index";
import BookCard from "@/app/ui/books/BookCard";

const BookDetailsPage = async ({params}) => {
  const { id } = await params;
  console.log(id);
  
  const book = await getBookById(id);
  console.log(book);
  
  return (
    <BookCard book={book} />
  );
}

export default BookDetailsPage;
