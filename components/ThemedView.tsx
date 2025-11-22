import { useColorScheme, View, type ViewProps, type StyleProp, type ViewStyle } from "react-native";
import { Colors } from "../constants/Colors";

type ThemedViewProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
};

const ThemedView: React.FC<ThemedViewProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return <View style={[{ backgroundColor: theme.background }, style]} {...props} />;
};

export default ThemedView;
