import {StyleSheet} from 'react-native';
import {colors} from 'src/utils/theme';
import {safeAreaTopHeight} from 'src/utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.DARK,
    alignItems: 'center',
    paddingBottom: 16,
    paddingTop: safeAreaTopHeight + 16,
  },
  title: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
