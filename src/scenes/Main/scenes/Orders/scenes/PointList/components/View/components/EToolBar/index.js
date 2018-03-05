import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import { lighten } from 'material-ui/styles/colorManipulator';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.dark,
        backgroundColor: lighten(theme.palette.secondary.light, 0.4),
      }
      : {
        color: lighten(theme.palette.secondary.light, 0.4),
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const {
    classes,
    isCummulated,
    toggleCummulated,
  } = props;

  return (
    <Toolbar
      className={classes.root}
    >
      <div className={classes.title}>
        <FormControlLabel
          control={
            <Switch
              checked={isCummulated}
              onChange={toggleCummulated}
              color="primary"
            />
          }
          label="고객별 누적보기"
        />
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  );
};
export default withStyles(toolbarStyles)(EnhancedTableToolbar);
