const rootStyles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    textDecoration: 'none'
  },
  card: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
    // color: theme.palette.primary.contrastText,
    // backgroundColor: theme.palette.primary.main
  },
  appBarTitle: {
    textDecoration: 'none',
    margin: '0 20px',
    flex: 1
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

export default rootStyles;
