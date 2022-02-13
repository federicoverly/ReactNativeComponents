import React, {useContext, useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Modal animationType="slide" visible={isVisible} transparent={true}>
        <View style={screenStyles.modalBackground}>
          <View style={screenStyles.contentBackground}>
            <Text style={screenStyles.modalTitle}>Modal</Text>

            <Text style={screenStyles.modalContent}>Content of the modal</Text>
            <Button
              title="Close"
              onPress={() => setIsVisible(false)}
              color={colors.text}
            />
          </View>
        </View>
      </Modal>
      <Button
        title="Open Modal"
        onPress={() => setIsVisible(true)}
        color={colors.text}
      />
    </View>
  );
};

const screenStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBackground: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContent: {
    fontSize: 16,
    marginVertical: 10,
  },
});
