import { View, Image, StyleSheet } from "react-native";
import TextWhite from "./textWhite";
import BotonDetalles from "./buttonDetalles";

export default Visor = ({ imgDayP, onPres }) => {
  console.log("desde visor", imgDayP.title);

  const getYouTubeThumbnail = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    if (match && match[1]) {
      const videoId = match[1];
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return null;
  };
  
  const imageUrl = getYouTubeThumbnail(imgDayP.url) || imgDayP.url;

  return (
    <View style={styles.container}>
      <TextWhite texto={imgDayP.title} size={15} />
      <Image style={styles.img} source={{ uri: imageUrl }}/>
      <TextWhite texto={imgDayP.date} size={15} />
      <BotonDetalles style={styles.buton} texto="Detalles" onPres={onPres}></BotonDetalles>
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
    borderRadius: 15
  },
  img: {
    alignSelf: "center",
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
});