import { Image, StyleSheet, View } from "react-native";
import TextWhite from "./textWhite";
import BotonDetalles from "./buttonDetalles"

export default Image7Day = (props) => {
  const { title, date, url, onPres } = props;
  console.log("desde image7Day", props);

  return (
    <View style={styles.container}>
      <View style={styles.lcontainer}>
        <TextWhite texto={title} />
        <TextWhite texto={date} />
        <BotonDetalles texto="Detalles" onPres={onPres} />
      </View>
      <View style={styles.rcontainer}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 90,
    borderRadius: 25,
  },
  container: {
    marginTop: 10,
    flexDirection: "row",
    padding: 5,
    borderColor: "#fc3d21",
    borderWidth: 1,
    borderRadius: 10,
  },
  lcontainer: {
    flex: 0.7,
    alignItems: "flex-start",
  },
  rcontainer: {
    flex: 0.3,
    alignContent: "flex-end",
  },
});
