import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  content: string;
}
export const SectionListFooter = ({content}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{content}</Text>
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
