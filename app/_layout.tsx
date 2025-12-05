import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext";
import { BooksProvider } from "../contexts/BooksContext";

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
          }}>
          <Stack.Screen name="index" options={{ title: "Home" }} />

          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false, animation: "none" }} />
          {/* <Stack.Screen name="books/[id]" options={} */}
        </Stack>
      </BooksProvider>
    </UserProvider>
  );
}
