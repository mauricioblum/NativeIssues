import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginTop: metrics.baseMargin,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: 70,
  },

  containerImage: {
    backgroundColor: colors.white,
    padding: metrics.basePadding / 2,
    paddingLeft: metrics.basePadding / 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  containerText: {
    flexDirection: 'column',
    marginLeft: metrics.baseMargin,
    height: '100%',
  },

  avatar: {
    width: 40,
    height: 40,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darker,
    maxWidth: 200,
  },

  subtitle: {
    fontSize: 10,
    fontWeight: 'normal',
    color: colors.dark,
  },
  arrowContainer: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    flexGrow: 1,
    height: '100%',
  },

  arrow: {
    color: colors.light,
  },
});

export default styles;
