import { useEffect, useState } from "react";
import Layout from "./layout";
import api from "../utility/api";
import Header from "../components/header";
import Visor from "../components/imageDay";
import TextWhite from "../components/textWhite";
import { format, sub } from "date-fns";

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
        const fecha7Dias = format(sub(fechaConFormato, { days: 7 }), "yyyy-MM-dd");

        const img7DayApi = await api(`&start_date=${fecha7Dias}&end_date=${fechaConFormato}`);
        setImg7Day(img7DayApi);
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
      <Visor imgDayP={imgDay} onPress={() => handlerD(imgDay)} />
      <TextWhite texto="Imagenes de los ultimos 7 dias" />
    </Layout>
  );
};
