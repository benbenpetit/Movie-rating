import { View, Text, Button } from "react-native";

const MovieList = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to aezpaezzpoa"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default MovieList;
