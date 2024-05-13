import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [picker1SelectedValue, setPicker1SelectedValue] = useState('0');
  const [picker2SelectedValue, setPicker2SelectedValue] = useState('0');
  const [picker3SelectedValue, setPicker3SelectedValue] = useState('0');
  const [picker4SelectedValue, setPicker4SelectedValue] = useState('0');
  const [calculatedValue, setCalculatedValue] = useState(0);

  const getPriceFromValue = value => {
    const pricePart = value.split('-$')[1];
    return parseInt(pricePart || '0', 10);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>POGS Online Shopping Calculator</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={picker1SelectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setPicker1SelectedValue(itemValue)}
        >
          <Picker.Item label="Potato-$3" value="Potato-$3" />
          <Picker.Item label="Carrot-$2" value="Carrot-$2" />
          <Picker.Item label="Broccoli-$5" value="Broccoli-$5" />
          <Picker.Item label="Beetroot-$3" value="Beetroot-$3" />
          <Picker.Item label="Corn-$4" value="Corn-$4" />
        </Picker>
        <Picker
          selectedValue={picker2SelectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setPicker2SelectedValue(itemValue)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={picker3SelectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setPicker3SelectedValue(itemValue)}
        >
          <Picker.Item label="Apple-$2" value="Apple-$2" />
          <Picker.Item label="Pear-$4" value="Pear-$4" />
          <Picker.Item label="Banana-$3" value="Banana-$3" />
          <Picker.Item label="Mango-$7" value="Mango-$7" />
          <Picker.Item label="Orange-$3" value="Orange-$3" />
        </Picker>
        <Picker
          selectedValue={picker4SelectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setPicker4SelectedValue(itemValue)}
        >
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>
      <View style={styles.footer}>
        <Button title="Calculate Total" onPress={() => {
          const price1 = getPriceFromValue(picker1SelectedValue);
          const quantity1 = parseInt(picker2SelectedValue, 10);
          const price3 = getPriceFromValue(picker3SelectedValue);
          const quantity3 = parseInt(picker4SelectedValue, 10);

          setCalculatedValue((price1 * quantity1) + (price3 * quantity3));
        }} />
        <Text style={styles.total}>Total: ${calculatedValue}</Text>
        <Text style={styles.developers}>Developed by - Daanyal Vasi, Daniel Salminka, Joseph Ryan and Kevin Anand</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    justifyContent: 'space-between'
  },
  header: {
    padding: 20,
    backgroundColor: '#4A90E2',
  },
  heading: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#E3F2FD'
  },
  picker: {
    flex: 1,
    height: 150
  },
  footer: {
    padding: 20,
    backgroundColor: '#CFD8DC'
  },
  total: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    color: '#0D47A1'
  },
  developers: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    marginTop: 5
  }
});
