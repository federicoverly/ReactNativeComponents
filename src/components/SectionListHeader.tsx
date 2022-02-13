import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
}
export const SectionListHeader = ({title}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={{...styles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
});
