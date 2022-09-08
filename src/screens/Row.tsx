import React from 'react';
import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native';

type props = {
  containerStyle?: ViewStyle;
  children: any;
};

export default function Row({containerStyle, children}: props) {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height:'12%'
  },
});
