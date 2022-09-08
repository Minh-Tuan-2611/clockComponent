import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type props = {
  isActive: boolean;
  number: string;
  onPress: () => void;
};

export default function BtnClockCommon({isActive, number, onPress}: props) {

  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.container,
        {backgroundColor: isActive ? '#0FA1EA' : 'transparent'},
      ]}>
      <Text style={[styles.text, {color: isActive ? '#fff' : '#2B2E33'}]}>
        {number}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30,
    zIndex:100
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});
