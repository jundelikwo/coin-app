import {StyleSheet} from 'react-native';
import {colors} from 'src/utils/theme';

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.WHITE,
    fontSize: 14,
    color: colors.BLACK,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.BLACK,
    padding: 16,
    paddingLeft: 45,
    width: '100%',
    textAlignVertical: 'top',
  },
  image: {
    position: 'absolute',
    zIndex: 100,
    bottom: 13,
    left: 12,
    width: 24,
    height: 24,
  },
});

export default styles;
