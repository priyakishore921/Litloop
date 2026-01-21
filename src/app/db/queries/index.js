import { bookModel } from "@/models/book-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/app/utils/data-utils";

export const getAllBooks = async () => {
  try {
    const allBooks = await bookModel.find().lean();
    return replaceMongoIdInArray(allBooks);
  } catch (err) {
    console.log('Error in retrieving all books from db ', err);
  }
}

export const getBookById = async (id) => {
  try {
    const bookById = await bookModel.findById(id).lean();
    return replaceMongoIdInObject(bookById);
  } catch (err) {
    console.log('Error in retrieving book from db ', err);
  }
}
