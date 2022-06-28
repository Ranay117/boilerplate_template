import {StyleSheet} from 'react-native';
import {COLOR} from '@config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.TAG_BACKGROUND,
    height: 32,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  text: {
    color: COLOR.TAG_TEXT,
    fontSize: 15,
    fontWeight: '700',
  },
  removeButtonContainer: {
    paddingLeft: 10,
  },
});

export default styles;
