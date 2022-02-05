import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 5,
  },
});
