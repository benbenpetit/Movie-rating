import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import FilmDetailScreen from "./src/screens/FilmDetail";
import MovieListScreen from "./src/screens/MovieList";
import AddFilmScreen from "./src/screens/AddFilm";
import SearchScreen from "./src/screens/Search";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MovieListScreen} />
        <Stack.Screen name="AddFilm" component={AddFilmScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default App;
