import {StyleSheet} from 'react-native';
import {colors} from 'src/utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  search: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 12,
    borderBottomColor: colors.LIGHT,
  },
});

export default styles;
