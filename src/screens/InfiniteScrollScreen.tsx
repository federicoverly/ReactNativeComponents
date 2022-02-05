import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const listHeaderTitle = () => {
    return (
      <View style={screenStyles.listHeader}>
        <HeaderTitle title="Infinite Scroll" />
      </View>
    );
  };

  const renderItem = (item: number) => {
    return (
      // <Image
      //   style={screenStyles.image}
      //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      // />
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => listHeaderTitle()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View>
            <ActivityIndicator size={25} color="blue" />
          </View>
        }
      />
    </View>
  );
};

const screenStyles = StyleSheet.create({
  listHeader: {
    marginLeft: 20,
  },
});
