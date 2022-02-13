import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);
  return <View style={{...styles.separator, color: theme.dividerColor}} />;
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 5,
  },
});
