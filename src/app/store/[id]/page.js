import { getBookById } from "@/app/lib/fake-data";
import BookCard from "@/app/ui/books/BookCard";

const BookDetailsPage = async ({params}) => {
  const { id } = await params;
  console.log(id);
  
  const book = getBookById(id);
  
  return (
    <BookCard book={book} />
  );
}

export default BookDetailsPage;
