import { TextInput, useColorScheme, type TextInputProps, type StyleProp, type TextStyle } from "react-native";
import { Colors } from "../constants/Colors";

type ThemedTextProps = TextInputProps & {
    style?: StyleProp<TextStyle>;
};

export default function ThemedTextInput({ style, ...props }: ThemedTextProps) {
    const colorScheme = useColorScheme() ?? "light";
    const theme = Colors[colorScheme];

    return (
        <TextInput
            style={[
                {
                    backgroundColor: theme.uiBackground,
                    color: theme.text,
                    padding: 20,
                    borderRadius: 6,
                },
                style,
            ]}
            placeholderTextColor={theme.text}
            {...props}
        />
    );
}
