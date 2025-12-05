import { createContext, ReactNode, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role, Models } from "react-native-appwrite";

const DATABASE_ID = "69315e8600321f3cd3a3";
const COLLECTION_ID = "1234567";

export interface Book extends Models.Document {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  userId: string;
  title: string;
  author: string;
  desc: string;
}

interface BooksContextType {
  createBook: (data: any) => Promise<void>;
  fetchBookById: (id: string) => Promise<Book | undefined>;
  deleteBook: (id: string) => Promise<void>;
  fetchBooks: () => Promise<Models.DocumentList<Book> | void>;
  books: Book[] | [];
}

export const BooksContext = createContext<BooksContextType | null>(null);

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[] | []>([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      if (user) {
        const res = await databases.listDocuments<Book>(DATABASE_ID, COLLECTION_ID, [Query.equal("userId", user.$id)]);
        setBooks(res.documents);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async function fetchBookById(id: string) {
    try {
      const response = await databases.getDocument<Book>(DATABASE_ID, COLLECTION_ID, id);

      return response;
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async function createBook(data: any) {
    try {
      if (user) {
        await databases.createDocument(
          DATABASE_ID,
          COLLECTION_ID,
          ID.unique(),
          {
            ...data,
            userId: user.$id,
          },
          [Permission.read(Role.user(user.$id)), Permission.update(Role.user(user.$id)), Permission.delete(Role.user(user.$id))],
        );
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async function deleteBook(id: string) {
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    let unsubscribe: () => void;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

    if (user) {
      fetchBooks();

       unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;

        if (events[0].includes("create")) {
          setBooks((prevBooks) => [...prevBooks, payload as Book]);
        }

        if (events[0].includes("delete")) {
          setBooks((prevBooks) => prevBooks.filter((book) => book.$id !== (payload as Book).$id));
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
       if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>{children}</BooksContext.Provider>
  );
}
