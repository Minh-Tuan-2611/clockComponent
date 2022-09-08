import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import BtnClockCommon from '../components/BtnClockCommon';
import Row from './Row';

const width = (Dimensions.get('window').width * 60) / 100;
export default function ClockScreen() {
  const [number, setNumber] = useState(3);
  const [transformDeg, setTransformDeg] = useState('0');
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <Row containerStyle={{justifyContent: 'center'}}>
        <BtnClockCommon
          isActive={number === 12}
          number="12"
          onPress={() => {
            setNumber(12);
          }}
        />
      </Row>
      <Row containerStyle={{width: '65%',bottom: '3%'}}>
        <BtnClockCommon
          isActive={number === 11}
          number="11"
          onPress={() => {
            setNumber(11);
            setCheck(true);
            setTransformDeg('45');
          }}
        />
        <BtnClockCommon
          isActive={number === 1}
          number="1"
          onPress={() => {
            setNumber(1);
            setTransformDeg('-45');
            setCheck(false);
          }}
        />
      </Row>
      <Row containerStyle={{width: '90%'}}>
        <BtnClockCommon
          isActive={number === 10}
          number="10"
          onPress={() => {
            setNumber(10);
            setCheck(true);
            setTransformDeg('25');
          }}
        />
        <BtnClockCommon
          isActive={number === 2}
          number="2"
          onPress={() => {
            setNumber(2);
            setTransformDeg('-25');
            setCheck(false);
          }}
        />
      </Row>
      <Row containerStyle={{width: '100%',marginVertical:12}}>
        <BtnClockCommon
          isActive={number === 9}
          number="9"
          onPress={() => {
            setNumber(9);
            setCheck(true);
            setTransformDeg('0');
          }}
        />
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              position: 'relative',
            },
            {
              transform: [
                {rotateY: `${transformDeg}deg`},
                {rotateZ: `${transformDeg}deg`},
              ],
            },
          ]}>
          <View
            style={[
              styles.clockwise,
              {
                backgroundColor:
                  check && number !== 12 && number !== 6
                    ? '#0FA1EA'
                    : 'transparent',
              },
            ]}></View>
          <View style={styles.centerClocks}></View>

          <View
            style={[
              styles.clockwise,
              {
                backgroundColor:
                  !check && number !== 12 && number !== 6
                    ? '#0FA1EA'
                    : 'transparent',
              },
            ]}></View>
        </View>
        <BtnClockCommon
          isActive={number === 3}
          number="3"
          onPress={() => {
            setNumber(3);
            setTransformDeg('0');
            setCheck(false);
          }}
        />
      </Row>
      <Row containerStyle={{width: '90%'}}>
        <BtnClockCommon
          isActive={number === 8}
          number="8"
          onPress={() => {
            setNumber(8);
            setCheck(true);
            setTransformDeg('-25');
          }}
        />
        <BtnClockCommon
          isActive={number === 4}
          number="4"
          onPress={() => {
            setNumber(4);
            setTransformDeg('25');
            setCheck(false);
          }}
        />
      </Row>
      <Row containerStyle={{width: '65%',top: '3%'}}>
        <BtnClockCommon
          isActive={number === 7}
          number="7"
          onPress={() => {
            setNumber(7);
            setCheck(true);
            setTransformDeg('-45');
          }}
        />
        <BtnClockCommon
          isActive={number === 5}
          number="5"
          onPress={() => {
            setNumber(5);
            setTransformDeg('45');
            setCheck(false);
          }}
        />
      </Row>
      <Row containerStyle={{justifyContent: 'center'}}>
        <BtnClockCommon
          isActive={number === 6}
          number="6"
          onPress={() => {
            setNumber(6);
          }}
        />
      </Row>
      <View
        style={{
          height: '85%',
          top: '8%',
          width: 2,
          position: 'absolute',
        }}>
        <View
          style={[
            styles.clockwise2,
            {
              backgroundColor: number === 12 ? '#0FA1EA' : 'transparent',
              // backgroundColor: '#0FA1EA',
            },
          ]}></View>
        <View
          style={[
            styles.clockwise2,
            {
              backgroundColor: number === 6 ? '#0FA1EA' : 'transparent',
              // backgroundColor: '#0FA1EA',
            },
          ]}></View>
      </View>
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
    padding: 5,
  },
  centerClocks: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#0FA1EA',
  },
  clockwise: {
    width: '60%',
    height: 2,
    backgroundColor: '#0FA1EA',
  },
  clockwise2: {
    width: '100%',
    height: '50%',
    backgroundColor: '#0FA1EA',
  },
});
