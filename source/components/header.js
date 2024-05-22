import { Image, View, StyleSheet, Platform } from "react-native";
import { primaryColor } from "../constant/color";
import TextWhite from "./textWhite"

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.titulo}>
        <TextWhite texto={"App NASA"} size={30}></TextWhite>
      </View>
      <View style={styles.imgbox}>
          <Image
            source={require("../../assets/logodenasa.png")}
            style={styles.img}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "android" && 30,
    backgroundColor: primaryColor,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 75,
    height: 75,
  },
  imgbox: {
    flex: 1,
    alignItems: "flex-end",
  },
  titulo: {
    flex: 1,
    alignItems: "center",
  },
});

export default Header;
