import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { primaryColor } from "../constant/color";

export default Layout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="white"></StatusBar>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" && 30,
    flex: 1,
    backgroundColor: primaryColor,
  },
});
