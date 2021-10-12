import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={16} color="black" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
  },
});
