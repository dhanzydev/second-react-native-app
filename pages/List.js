import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const DATA = [
  {
    id: "1",
    title: "Sindrom Nefrotik",
  },
  { id: "2", title: "Glomerulonefritis" },
  { id: "3", title: "Hidronefrosis" },
  { id: "4", title: "Batu Ginjal" },
  { id: "5", title: "Pielonefritis" },
];

const Item = ({ title, id }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.buttonItem}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Details", {
            itemId: id,
            otherParam: "anything you want here",
          });
        }}
      >
        <Text style={styles.textItem}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const renderItem = ({ item }) => (
  <Item title={item.title} materi={item.materi} id={item.id} />
);
export default class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          nestedScrollEnabled
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    paddingBottom: 70,
    height: Dimensions.get("window").height,
  },
  item: {
    marginTop: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 15,
    backgroundColor: "#547d2e",
  },
  textItem: {
    padding: 25,
    color: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
