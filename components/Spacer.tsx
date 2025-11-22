import { View, type StyleProp, type ViewStyle } from "react-native";

type SpacerProps = {
  width?: number | string;
  height?: number | string;
};

const Spacer = ({ width = "100%", height = 40 }: SpacerProps) => {
  return <View style={{ width, height } as StyleProp<ViewStyle>} />;
};

export default Spacer;
