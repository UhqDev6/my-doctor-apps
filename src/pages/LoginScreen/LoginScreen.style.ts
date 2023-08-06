import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
