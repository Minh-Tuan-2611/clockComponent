import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import BtnClockCommon from '../components/BtnClockCommon';
import Row from './Row';

const width = (Dimensions.get('window').width * 70) / 100;
export default function ClockMinutes() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Row containerStyle={{justifyContent: 'center'}}>
        <BtnClockCommon
          isActive={number === 0}
          number="0"
          onPress={() => {
            setNumber(0);
          }}
        />
      </Row>
      <Row containerStyle={{width: '65%',bottom:'3%'}}>
        <BtnClockCommon
          isActive={number === 55}
          number="55"
          onPress={() => {
            setNumber(55);
          }}
        />
        <BtnClockCommon
          isActive={number === 5}
          number="5"
          onPress={() => {
            setNumber(5);
          }}
        />
      </Row>
      <Row containerStyle={{width: '90%'}}>
        <BtnClockCommon
          isActive={number === 50}
          number="50"
          onPress={() => {
            setNumber(50);
          }}
        />
        <BtnClockCommon
          isActive={number === 10}
          number="10"
          onPress={() => {
            setNumber(10);
          }}
        />
      </Row>
      <Row containerStyle={{width: '100%',paddingVertical:'5%'}}>
        <BtnClockCommon
          isActive={number === 45}
          number="45"
          onPress={() => {
            setNumber(45);
          }}
        />
        <BtnClockCommon
          isActive={number === 15}
          number="15"
          onPress={() => {
            setNumber(15);
          }}
        />
      </Row>
      <Row containerStyle={{width: '90%'}}>
        <BtnClockCommon
          isActive={number === 40}
          number="40"
          onPress={() => {
            setNumber(40);
          }}
        />
        <BtnClockCommon
          isActive={number === 20}
          number="20"
          onPress={() => {
            setNumber(20);
          }}
        />
      </Row>
      <Row containerStyle={{width: '65%',top:'3%'}}>
        <BtnClockCommon
          isActive={number === 35}
          number="35"
          onPress={() => {
            setNumber(35);
          }}
        />
        <BtnClockCommon
          isActive={number === 25}
          number="25"
          onPress={() => {
            setNumber(25);
          }}
        />
      </Row>
      <Row containerStyle={{justifyContent: 'center'}}>
        <BtnClockCommon
          isActive={number === 30}
          number="30"
          onPress={() => {
            setNumber(30);
          }}
        />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width,
    backgroundColor: '#A5DEFF',
    borderRadius: width,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:5
  },
});
