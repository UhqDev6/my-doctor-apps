import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 90,
    fontFamily: fonts.primary[800],
  },
  gapVertical: {
    height: 16,
  },
});
