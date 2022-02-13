import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {useForm} from '../hooks/useForms';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {form, onChange} = useForm({
    name: '',
    email: '',
    telephone: '',
    isSuscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title={'Text Inputs'} />
            <TextInput
              style={{
                ...stylesScreen.textInputStyle,
                borderColor: colors.card,
                color: colors.text,
              }}
              placeholder="Name"
              placeholderTextColor={colors.card}
              value={form.name}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={{
                ...stylesScreen.textInputStyle,
                borderColor: colors.card,
                color: colors.text,
              }}
              placeholder="Surname"
              placeholderTextColor={colors.card}
              autoCapitalize="words"
              value={form.email}
              onChangeText={value => onChange(value, 'email')}
              keyboardAppearance="dark"
              keyboardType="email-address"
            />
            <TextInput
              style={{
                ...stylesScreen.textInputStyle,
                borderColor: colors.card,
                color: colors.text,
              }}
              placeholder="Email"
              placeholderTextColor={colors.card}
              autoCapitalize="none"
              value={form.telephone}
              onChangeText={value => onChange(value, 'telephone')}
            />
            <View style={stylesScreen.switchRow}>
              <Text style={{...stylesScreen.switchText, color: colors.primary}}>
                Suscribed: {form.isSuscribed}{' '}
              </Text>
              <CustomSwitch
                isOn={form.isSuscribed}
                onChange={value => onChange(value, 'isSuscribed')}
              />
            </View>

            <Text style={{...stylesScreen.formText, color: colors.primary}}>
              {JSON.stringify(form, null, 3)}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    heigth: 50,
    paddingHorizontal: 10,
    borderRadious: 18,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    marginVertical: 10,
  },
  formText: {
    fontSize: 20,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
