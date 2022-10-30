import {StyleSheet} from 'react-native';
import {colors} from 'src/utils/theme';

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: colors.LIGHT,
    paddingVertical: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
  },
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default styles;
