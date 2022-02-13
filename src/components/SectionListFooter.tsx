import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  content: string;
}
export const SectionListFooter = ({content}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={{...styles.content, color: colors.primary}}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  content: {
    fontSize: 20,
    marginBottom: 5,
  },
});
