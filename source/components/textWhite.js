import { View, Text } from "react-native";

const TextWhite = ({ texto, size }) => {
  return (
    <View>
      <Text style={{ color: "#f0f", paddingHorizontal: 10, fontSize: size || 20, paddingBottom: 5 }}>{texto}</Text>
    </View>
  );
};

export default TextWhite;
