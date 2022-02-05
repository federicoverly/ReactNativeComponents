import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
}
export const SectionListHeader = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
