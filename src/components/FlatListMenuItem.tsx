import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MenuItem} from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  // const {colors} = useTheme();

  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={colors.primary} size={20} />
        <Text
          style={{
            ...styles.itemText,
            color: colors.text,
          }}>
          {menuItem.name}
        </Text>
        <View style={styles.arrowIcon}>
          <Icon
            name="chevron-forward-outline"
            color={colors.primary}
            size={20}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 5,
    fontSize: 19,
  },
  arrowIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
