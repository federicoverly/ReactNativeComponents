import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = state;
  const onChange = (value: boolean, field: string) => {
    setState({...state, [field]: value});
  };

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title={'Switches'} />
      <View style={screenStyles.switchRow}>
        <Text style={{...screenStyles.switchText, color: colors.primary}}>
          Is active
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={screenStyles.switchRow}>
        <Text style={{...screenStyles.switchText, color: colors.primary}}>
          Is Hungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={screenStyles.switchRow}>
        <Text style={{...screenStyles.switchText, color: colors.primary}}>
          Is Happy
        </Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{...screenStyles.switchText, color: colors.primary}}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const screenStyles = StyleSheet.create({
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
