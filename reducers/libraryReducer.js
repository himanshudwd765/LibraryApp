
import { ADD_BOOK, DELETE_BOOK} from '../constants';

const initialState = { books: [{ name: 'Physics' }] }

export default function libraryReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.book] , //Create a new array and insert the new entry
      };
    case DELETE_BOOK:
      return{
        books:state.books.filter(b=>b.name != action.book.name), // Remove the matching name of book
      }

    default:
      return state;
  }
}
