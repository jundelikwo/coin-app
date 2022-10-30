import {StyleSheet} from 'react-native';
import {colors} from 'src/utils/theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.DARK,
    textAlign: 'center',
  },
  content: {
    marginTop: 15,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.DARK,
    marginBottom: 5,
  },
  value: {
    fontWeight: 'bold',
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cancelBtn: {
    position: 'absolute',
    top: 0,
    right: 20,
  },
  image: {
    width: 34,
    height: 34,
  },
});

export default styles;
