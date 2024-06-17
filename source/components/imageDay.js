import { View, Image, StyleSheet } from "react-native";
import TextWhite from "./textWhite";
import BotonDetalles from "./buttonDetalles";
import { getYouTubeThumbnail } from "../utility/conversorURL";

export default Visor = ({ imgDayP, onPres }) => {
  const imageUrl = getYouTubeThumbnail(imgDayP.url) || imgDayP.url;
  return (
    <View style={styles.container}>
      <TextWhite texto={imgDayP.title} size={15} />
      <Image style={styles.img} source={{ uri: imageUrl }} />
      <TextWhite texto={imgDayP.date} size={15} />
      <BotonDetalles
        style={styles.buton}
        texto="Detalles"
        onPres={onPres}
      ></BotonDetalles>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#f0f",
    borderWidth: 2,
    height: 300,
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  img: {
    alignSelf: "center",
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
});
