import React, {useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {SectionListFooter} from '../components/SectionListFooter';
import {SectionListHeader} from '../components/SectionListHeader';
import {styles} from '../theme/AppTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Houses {
  house: string;
  data: string[];
}

const houses: Houses[] = [
  {
    house: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    house: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Thor',
      'Spiderman',
    ],
  },
  {
    house: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

export const SectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={houses}
        renderItem={({item}) => (
          <Text style={{color: colors.card}}>{item}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <SectionListHeader title={section.house} />
        )}
        stickySectionHeadersEnabled
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <HeaderTitle title={'Total houses: ' + houses.length} />
        )}
        renderSectionFooter={({section}) => (
          <SectionListFooter
            content={'Total elements: ' + section.data.length}
          />
        )}
        // SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
