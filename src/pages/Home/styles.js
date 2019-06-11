import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 14,
    color: colors.light,
    lineHeight: 21,
  },

  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  form: {
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  list: {
    margin: metrics.baseMargin * 2,
    flexDirection: 'column',
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    width: '80%',
    paddingHorizontal: metrics.basePadding,
    marginRight: metrics.baseMargin,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },

  icon: {
    color: colors.darker,
  },

  repositories: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    backgroundColor: colors.light,
    height: 1,
  },
});

export default styles;
