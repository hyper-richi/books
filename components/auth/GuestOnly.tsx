import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { FC } from "react";
import Loader from "../Loader";

interface GuestOnlyProps {
  children: React.ReactNode;
}

const GuestOnly: FC<GuestOnlyProps> = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user) {
      router.replace("/profile");
    }
  }, [user, authChecked]);

  if (!authChecked) {
    return <Loader />;
  }

  if (user) {
    return <Loader />;
  }

  return children;
};

export default GuestOnly;
