import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ClockMinutes from './src/screens/ClockMinutes';
import ClockScreen from './src/screens/ClockScreen';


const App = () => {

  return (
    <View style={{alignItems: 'center',marginTop:20}}>
      <ClockScreen/>
      {/* <ClockMinutes/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
