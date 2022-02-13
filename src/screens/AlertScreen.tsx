import React, {useContext} from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import prompt from 'react-native-prompt-android';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const AlertScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg, the body of the alert',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      // Only works on Android
      {cancelable: true, onDismiss: () => console.log('On dismiss ')},
    );
  const showPrompt = () => {
    // Alert.prompt(
    //   'Are you sure?',
    //   'You will not be able to go back',
    //   (valor: string) => console.log('info: ', valor),
    //   // 'plain-text',
    //   // 'login-password',
    //   'secure-text',
    //   'Password',
    //   'number-pad',
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title={'Alerts'} />
      <View>
        <Button
          title={'Show Alert'}
          onPress={showAlert}
          color={colors.primary}
        />

        <View style={screenStyles.separator} />
        {/* Only works on ios */}
        <Button
          title={'Show Prompt'}
          onPress={showPrompt}
          color={colors.primary}
        />
      </View>
    </View>
  );
};

const screenStyles = StyleSheet.create({
  separator: {
    height: 20,
  },
});
