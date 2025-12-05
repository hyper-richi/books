import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import GuestOnly from "../../components/auth/GuestOnly";
import { useUser } from "../../hooks/useUser";

export default function AuthLayout() {
   const { user } = useUser();
   console.log("user: ", user);
  return (
    <GuestOnly>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </GuestOnly>
  );
}
