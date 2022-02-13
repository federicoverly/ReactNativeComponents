import React, {useContext, useState} from 'react';
import {RefreshControl, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Finished');
      setRefreshing(false);
      setData('Hello world');
    }, 1500);
  };
  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="lightblue"
          colors={[colors.primary]}
          style={{backgroundColor: colors.background}}
          tintColor={colors.background}
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
