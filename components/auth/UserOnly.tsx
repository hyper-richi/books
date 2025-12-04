import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { FC } from "react";
import Loader from "../Loader";

interface UserOnlyProps {
  children: React.ReactNode;
}

const UserOnly: FC<UserOnlyProps> = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace("/login");
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    return <Loader />;
  }

  return children;
};

export default UserOnly;
