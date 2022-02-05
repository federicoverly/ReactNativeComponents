import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    fadeIn();
    setIsLoading(false);
  };
  return (
    <View style={screenStyles.container}>
      {isLoading && (
        <ActivityIndicator
          size={30}
          color="blue"
          style={screenStyles.activityIndicatorStyle}
        />
      )}
      <Animated.Image
        source={{uri}}
        style={{...(style as any), opacity}}
        onLoadEnd={() => finishLoading()}
      />
    </View>
  );
};

const screenStyles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  activityIndicatorStyle: {position: 'absolute'},
});
