import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';

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

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title={'Switches'} />
      <View style={screenStyles.switchRow}>
        <Text style={screenStyles.switchText}>Is active</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={screenStyles.switchRow}>
        <Text style={screenStyles.switchText}>Is Hungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={screenStyles.switchRow}>
        <Text style={screenStyles.switchText}>Is Happy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={screenStyles.switchText}>
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
