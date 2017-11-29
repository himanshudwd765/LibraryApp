import { ADD_BOOK, DELETE_BOOK } from './constants';

export function addBook(book) {
  return {
    type: 'ADD_BOOK',
    book,
  };
}

export function deleteBook(book) {
  return {
    type: 'DELETE_BOOK',
    book,
  };
}
