import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Detalles from "../screens/detalles";
import { primaryColor } from "../constant/color";

const Stack = createNativeStackNavigator();

const Opciones = {
  headerStyle: { backgroundColor: primaryColor },
  headerTitleStyle: { color: "white", alignment: "center" },
  headerTitleAlign: "center",
};

export default Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={Opciones}
        />
        <Stack.Screen
          name="Detalles"
          component={Detalles}
          options={Opciones}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
