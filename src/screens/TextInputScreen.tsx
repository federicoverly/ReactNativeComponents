import React from 'react';
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

export const TextInputScreen = () => {
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
              style={stylesScreen.textInputStyle}
              placeholder="Name"
              value={form.name}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={stylesScreen.textInputStyle}
              placeholder="Surname"
              autoCapitalize="words"
              value={form.email}
              onChangeText={value => onChange(value, 'email')}
              keyboardAppearance="dark"
              keyboardType="email-address"
            />
            <TextInput
              style={stylesScreen.textInputStyle}
              placeholder="Email"
              autoCapitalize="none"
              value={form.telephone}
              onChangeText={value => onChange(value, 'telephone')}
            />
            <View style={stylesScreen.switchRow}>
              <Text style={stylesScreen.switchText}>
                Suscribed: {form.isSuscribed}{' '}
              </Text>
              <CustomSwitch
                isOn={form.isSuscribed}
                onChange={value => onChange(value, 'isSuscribed')}
              />
            </View>

            <Text style={stylesScreen.formText}>
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
