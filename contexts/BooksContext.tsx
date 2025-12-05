import { createContext, ReactNode, useState } from "react";
import { useUser } from "../hooks/useUser";
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";

const DATABASE_ID = "69315e8600321f3cd3a3";
const COLLECTION_ID = "1234567";

interface BooksContextType {
  createBook: (data: any) => Promise<void>;
  fetchBookById: (id: string) => Promise<"response" | undefined>;
  deleteBook: (id: string) => Promise<void>;
  fetchBooks: () => Promise<void>;
  books: any;
}

export const BooksContext = createContext<BooksContextType | null>(null);

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

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

  async function createBook(data: any) {
    try {
      if (user) {
        console.log("user.id: ", user?.$id);

        await databases.createDocument({
          databaseId: DATABASE_ID,
          collectionId: COLLECTION_ID,
          documentId: ID.unique(),
          data: {
            ...data,
            userId: user.$id,
          },
          permissions: [
            Permission.read(Role.user(user.$id)),
            Permission.update(Role.user(user.$id)),
            Permission.delete(Role.user(user.$id)),
          ],
        });
      }
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
