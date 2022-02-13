import React, {useContext} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMoving} = useAnimation();

  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
          backgroundColor: colors.primary,
          opacity: opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="Fade in"
        onPress={() => {
          fadeIn();
          startMoving(-100);
        }}
        color={colors.primary}
      />
      <Button
        title="Fade out"
        onPress={() => fadeOut()}
        color={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    marginVertical: 20,
  },
});
