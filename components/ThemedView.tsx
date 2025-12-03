import { useColorScheme, View, type ViewProps, type StyleProp, type ViewStyle } from "react-native";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ThemedViewProps = ViewProps & {
    style?: StyleProp<ViewStyle>;
    safe?: boolean;
};

const ThemedView: React.FC<ThemedViewProps> = ({ style, safe = false, ...props }) => {
    const colorScheme = useColorScheme() ?? "light";
    const theme = Colors[colorScheme];

    if (!safe) return <View style={[{ backgroundColor: theme.background }, style]} {...props} />;

    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                {
                    backgroundColor: theme.background,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                },
                style,
            ]}
            {...props}
        />
    );
};

export default ThemedView;
