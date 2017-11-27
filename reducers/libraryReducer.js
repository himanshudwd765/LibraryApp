
import { ADD_BOOK} from '../constants';

const initialState = { books: [{ name: 'Physics' }] }

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.book],
      };

    default:
      return state;
  }
}
