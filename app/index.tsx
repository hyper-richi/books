import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />

      <ThemedText style={styles.title} title={true}>
        The Number 11
      </ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</ThemedText>

      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>

      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0dfe8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
