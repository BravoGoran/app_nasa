import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import Layout from "./layout";
import api from "../utility/api";
import Header from "../components/header";
import Visor from "../components/imageDay";
import TextWhite from "../components/textWhite";
import { format, sub } from "date-fns";
import Image7Day from "../components/image7Day";

export default Home = ({ navigation }) => {
  const [imgDay, setImgDay] = useState({});
  const [img7Day, setImg7Day] = useState([]);

  useEffect(() => {
    const getImgDay = async () => {
      try {
        const imgDayApi = await api("");
        setImgDay(imgDayApi);
      } catch (error) {
        console.error("Home imgDayApi Error", error);
      }
    };

    const getImg7Day = async () => {
      try {
        const fechaDeHoy = new Date();
        const fechaConFormato = format(fechaDeHoy, "yyyy-MM-dd");
        const fecha7Dias = format(sub(fechaDeHoy, { days: 7 }), "yyyy-MM-dd");

        const img7DayApi = await api(
          `&start_date=${fecha7Dias}&end_date=${fechaConFormato}`
        );
        console.log('Imágenes de los últimos 7 días:', img7DayApi);
        if (Array.isArray(img7DayApi)) {
          setImg7Day(img7DayApi);
        } else {
          setImg7Day([img7DayApi]);
        }
      } catch (error) {
        console.error("Home img7DayApi Error", error);
      }
    };

    getImgDay().catch(null);
    getImg7Day().catch(null);
  }, []);

  const handlerD = (imageRequired) => {
    navigation.navigate("Detalles", {
      title: imageRequired.title,
      url: imageRequired.url,
      desc: imageRequired.explanation,
      date: imageRequired.date,
    });
  };

  return (
    <Layout>
      <Header texto="Descubre"></Header>
      <Visor imgDayP={imgDay} onPres={() => handlerD(imgDay)} />
      <TextWhite texto="Imagenes de los ultimos 7 dias" />
      <FlatList
        style={{ marginVertical: 5 }}
        data={img7Day}
        renderItem={({ item }) => (
          <Image7Day
            title={item.title}
            date={item.date}
            url={item.url}
            onPres={() => handlerD(item)}
          />
        )}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      ></FlatList>
    </Layout>
  );
};
