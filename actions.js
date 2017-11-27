import { ADD_BOOK } from './constants';

export function addBook(book) {
  return {
    type: 'ADD_BOOK',
    book,
  };
}
