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
    title: "Gonore",
  },
  { id: "2", title: "Sifilis" },
  { id: "3", title: "Herpes Genitalia" },
  { id: "4", title: "Trichomoniasis" },
  { id: "5", title: "Uretritis Non Spesifik UNS" },
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
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: DATA,
      error: null,
      searchValue: "",
    };
    this.arrayholder = DATA;
  }
  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />

        <FlatList
          nestedScrollEnabled
          data={this.state.data}
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
    paddingTop: 30,
    padding: 2,
    paddingBottom: 70,
    backgroundColor: "#FCE2DB",
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
    marginBottom: 10,
    backgroundColor: "#F675A8",
  },
  textItem: {
    padding: 15,
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
