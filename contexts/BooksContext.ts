import { createContext, ReactNode, useState } from "react";

const DATABASE_ID = "69315e8600321f3cd3a3";
const COLLECTION_ID = "books";

interface BooksContextType {
  createBook: (data: []) => Promise<void>;
  fetchBookById: (id: string) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
  fetchBooks: () => Promise<void>;
  authChecked: boolean;
  books:[];
}

export const BooksContext = createContext<BooksContextType | null>(null);

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async function fetchBookById(id: string) {
    try {
      return "response";
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function createBook(data: []) {
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function deleteBook(id: string) {
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>{children}</BooksContext.Provider>
  );
}
