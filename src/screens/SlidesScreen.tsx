import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const isVisible = useRef(false);
  const {opacity, fadeIn} = useAnimation();
  const renderItem = (item: Slide) => {
    return (
      <View style={screenStyles.itemContainer}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={{...screenStyles.title, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...screenStyles.description, color: colors.card}}>
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={screenStyles.container}>
      <Carousel
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View style={screenStyles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{...screenStyles.dotStyle, backgroundColor: colors.primary}}
          //dotColor="red"
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{...screenStyles.button, backgroundColor: colors.primary}}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreen');
              }
            }}>
            <Animated.Text
              style={{
                ...screenStyles.buttonText,
                color: colors.background,
              }}>
              Enter
            </Animated.Text>

            <Icon
              name="chevron-forward-outline"
              color={colors.background}
              size={30}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  itemContainer: {
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
    flex: 1,
  },
  imageStyle: {
    width: 350,
    heigth: 400,
    resizeMode: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'lightblue',
  },
  description: {
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  dotStyle: {
    heigth: 10,
    width: 10,
    borderRadius: 10,
  },
  button: {
    flexDirection: 'row',
    width: 140,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {fontSize: 20, color: 'white'},
});
