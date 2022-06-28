import {StyleSheet} from 'react-native';
import {COLOR} from '@config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  iconContainer: {
    height: 44,
    width: 44,
    borderRadius: 12,
    backgroundColor: COLOR.RECENT_SEARCH_ICON_CONTAINER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    color: '#373737',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    color: '#373737',
  },
  moreFilters: {
    fontSize: 11,
    color: '#373737',
  },
});

export default styles;
