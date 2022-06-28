import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLOR} from '@config';
import {Text} from '../';
import styles from './recent-search-item.style';

const RecentSearchItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="clock" solid color={COLOR.RECENT_SEARCH_ICON} size={20} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>

        <Text style={styles.subtitle} numberOfLines={1}>
          {props.subtitle}
        </Text>

        {props.moreFiltersCount ? (
          <Text style={styles.moreFilters} numberOfLines={1}>
            {/* & {props.moreFiltersCount} more filters apply */}
            more filters apply
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export {RecentSearchItem};
