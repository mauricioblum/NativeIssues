import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  list: {
    margin: metrics.baseMargin * 2,
    flexDirection: 'column',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.light,
    margin: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    borderRadius: metrics.baseRadius * 2,
  },
  option: {
    color: colors.black,
    textAlign: 'center',
  },
});

export default styles;
