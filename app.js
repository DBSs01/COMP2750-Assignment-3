import React, { useState } from "react";
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 

export default function App() {

  const [picker1SelectedValue, setPicker1SelectedValue] = useState("val-Potato-5");
  const [picker2SelectedValue, setPicker2SelectedValue] = useState("val-Carrot-5");

  const [calculatedValue, setCalculatedValue] = useState("Press the above button to calculate");



  return (
  <SafeAreaView style={styles.container}>

      <View style = {styles.row1}>
      <Text style = {styles.heading}> POGS Online Shopping App </Text>
      </View>
      <View style = {styles.row2}>
  <Picker 
    style = {styles.picker1}
    selectedValue  = {picker1SelectedValue}
    onValueChange = {(itemValue, itemIndex) => setPicker1SelectedValue (itemValue)}>
    <Picker.Item label = "Potato" value = "val-Potato-5"/>
    <Picker.Item label = "Carrot" value = "val-Carrot-5"/>
  </Picker>
  <Picker 
  style = {styles.picker2}
  selectedValue = {picker2SelectedValue}
  onValueChange = {(itemValue, itemIndex) => setPicker2SelectedValue (itemValue)}>
    <Picker.Item label = "1" value = "1"/>
    <Picker.Item label = "2" value = "2"/>
    <Picker.Item label = "3" value = "3"/>
    <Picker.Item label = "4" value = "4"/>
    <Picker.Item label = "5" value = "5"/>
  </Picker>
  </View>
  <View>
    <Button
      title = "Calculate"
      onPress={() => {
        const lastChar = picker1SelectedValue[picker1SelectedValue.length -1];
        const charToIntForPicker1 = parseInt(lastChar);
        const charToIntForPicker2 = parseInt(picker2SelectedValue);
        setCalculatedValue(charToIntForPicker1 * charToIntForPicker2);
      }}
    />
      <Text style = {StyleSheet.heading}> Placeholder </Text>
  </View>
  </SafeAreaView>
  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffcc'
    },
  }); 
  
