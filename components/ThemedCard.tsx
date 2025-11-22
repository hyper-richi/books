import { StyleSheet, useColorScheme, View, type ViewProps, type StyleProp, type ViewStyle } from "react-native";
import { Colors } from "../constants/Colors";

type ThemedCardProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
};

const ThemedCard: React.FC<ThemedCardProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return <View
  style={[{ backgroundColor: theme.uiBackground },
    styles.card, style]} {...props} />;
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
