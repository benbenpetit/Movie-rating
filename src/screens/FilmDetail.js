import { View, Button, Text } from "react-native";

const FilmDetailScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default FilmDetailScreen;
