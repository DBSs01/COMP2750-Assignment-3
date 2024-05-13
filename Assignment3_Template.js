import React, {useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker'; // don't forget to add dependency (bottom of screen)



export default function App() {
  const [picker1SelectedValue, setPicker1SelectedValue] = useState('');
  const [picker2selectedValue, setPicker2selectedValue] = useState('0');
  const [picker3SelectedValue, setPicker3SelectedValue] = useState('');
  const [picker4selectedValue, setPicker4selectedValue] = useState('0');
  const [calculatedValue, setCalculatedValue] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.heading}> POGS Online Shopping Calculator </Text>
      </View>
      <View style={styles.row2}>
        <Picker style={styles.picker1}>
            <Picker.Item label="Potato-$3" value="val-Potato-$3" />
            <Picker.Item label="Carrot-$2" value="val-Carrot-$2" />
            <Picker.Item label="Brocolli-$5" value="val-Brocolli-$5" />
            <Picker.Item label="Beetroot-$3" value="val-Beetroot-$3" />
            <Picker.Item label="Corn-$4" value="val-Corn-$4" />
        </Picker>
        <Picker style={styles.picker2}>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" /> 
        </Picker>
      </View>
      <View style={styles.row3}>
        <Picker style={styles.picker3}>
            <Picker.Item label="Apple-$2" value="val-Apple-$2" />
            <Picker.Item label="Pear-$4" value="val-Pear-$4" />
            <Picker.Item label="Banana-$3" value="val-Banana-$3" />
            <Picker.Item label="Mango-$7" value="val-Mango-$7" />
            <Picker.Item label="Orange-$3" value="val-Orange-$3" />
        </Picker>
        <Picker style={styles.picker4}>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" /> 
        </Picker>
      </View>      
      <View>
        <Button title="CALCULATE"
        onPress={() => {
          const lastCharPicker1 = picker1SelectedValue[picker1SelectedValue.length - 1];
          const charToIntForPicker1 = parseInt(lastChar);

          const charToIntForPicker2 = parseInt(picker2selectedValue);

          const lastCharPicker3 = picker3SelectedValue[picker3SelectedValue.length - 1];
          const charToIntForPicker3 = parseInt(lastChar);

          const charToIntForPicker4 = parseInt(picker4selectedValue);

          setCalculatedValue(charToIntForPicker1 * charToIntForPicker2 + charToIntForPicker3 * charToIntForPicker4);
        }}
      /> 
        <Text style={styles.heading}> Placeholder </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3D3E3'
  },
  heading: {
    fontSize:20,
    textAlign: 'center',
    marginTop: 30
  },
  row2:{
    flexDirection: 'row',
    marginTop: 7,
  },
  picker1:{
    flex:2
  },
  picker2:{
    flex:1
  },
});
