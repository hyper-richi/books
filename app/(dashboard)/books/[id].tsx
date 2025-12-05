import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

// themed components
import ThemedText from "../../../components/ThemedText";
import ThemedButton from "../../../components/ThemedButton";
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import ThemedCard from "../../../components/ThemedCard";
import { useEffect, useState } from "react";
import { useBooks } from "../../../hooks/useBooks";
import ThemedLoader from "../../../components/Loader";
import { Book } from "../../../contexts/BooksContext";

const BookDetails = () => {
  const [book, setBook] = useState<Book>();
  console.log("book: ", book);

  const { id } = useLocalSearchParams();
  const { fetchBookById } = useBooks();

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id as string);
      setBook(bookData);
    }

    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.desc}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
});
