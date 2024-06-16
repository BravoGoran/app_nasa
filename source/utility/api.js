const gateway = "https://api.nasa.gov/planetary/apod";
const api_key = "SItCayg6sQTWzKjr3fUd8bkl1SUseajY6ts23h6c";

export default api = async (parametros) => {
  try {
    const response = await fetch(
      `${gateway}?api_key=${api_key}${parametros.lenght > 0 ? parametros : ""}`
    );
    return await response.json();
  } catch (error) {
    console.error("error en api", error);
  } finally {
  }
};
