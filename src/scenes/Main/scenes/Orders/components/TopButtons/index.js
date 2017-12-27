import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = {
  button: {
    fontSize: '1.3em',
    width: '33.333333%',
    borderRadius: '0px',
  },
};
class TopButtons extends React.Component {
  render() {
    const {
      openDrawerMenu,
      handleSavingPoint,
      handleManagingPoint,
      classes,
    } = this.props;
    return (
      <div>
        <Button classes={{ root: classes.button }} onClick={openDrawerMenu} color="primary" raised>
          메뉴
        </Button>
        <Button classes={{ root: classes.button }} onClick={handleManagingPoint} color="primary" raised>
          포인트 관리
        </Button>
        <Button classes={{ root: classes.button }} onClick={handleSavingPoint} color="primary" raised>
          포인트 적립
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(TopButtons);
