import React, {useContext} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ThemeScreen = () => {
  const {
    setLightTheme,
    setDarkTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title={'Theme Screen'} />
      <View style={screenStyle.buttonContainer}>
        <TouchableOpacity
          style={{...screenStyle.button, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <Text style={{...screenStyle.text, color: colors.background}}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...screenStyle.button, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <Text style={{...screenStyle.text, color: colors.background}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const screenStyle = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'lightblue',
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
