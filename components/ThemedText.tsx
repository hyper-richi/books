import { Text, useColorScheme, type ViewProps, type StyleProp, type TextStyle } from "react-native";
import { Colors } from "../constants/Colors";

type ThemedTextProps = ViewProps & {
  style?: StyleProp<TextStyle>;
  title?: boolean;
};

const ThemedText: React.FC<ThemedTextProps> = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
