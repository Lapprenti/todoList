import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  const task = props.initialParams.t;
  return (
    <View style={styles.item} >
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{task.label}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#F7F7F7',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    justifyContent: 'center',
    
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(47, 105, 255, 0.4)',
    borderRadius: 5
  },
  itemText: {
    minWidth: "80%",
    paddingHorizontal: 50
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2F69FF'
  },
});

export default Task;