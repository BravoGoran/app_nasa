import api from "../utility/api";

const api_key = "AIzaSyCxqtfhn6BpfI8kiTPwIRCD438_UQInuZQ";

const [apiSimple, setApiCompleta] = useState({});

useEffect(() => {
  const getApiCompleta = async () => {
    try {
      const apiCompleta = await api("");
      setApiCompleta(apiCompleta);
    } catch (error) {
      console.error("Home apiCompleta Error", error);
    }
  };
  getApiCompleta().catch(null);
});

function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}
console.log(apiSimple.url);
console.log(youtube_parser(apiSimple.url));
