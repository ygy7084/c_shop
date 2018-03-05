import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = {
  button: {
    fontSize: '1.3em',
    width: '25%',
    height: '100%',
    borderRadius: '0px',
  },
};
class TopButtons extends React.Component {
  render() {
    const {
      openDrawerMenu,
      getPointList,
      handleSavingPoint,
      handleManagingPoint,
      classes,
    } = this.props;
    return (
      <div>
        <Button classes={{ root: classes.button }} onClick={openDrawerMenu} color="primary">
          메뉴
        </Button>
        <Button classes={{ root: classes.button }} onClick={getPointList} color="primary">
          포인트 적립 내역
        </Button>
        <Button classes={{ root: classes.button }} onClick={handleManagingPoint} color="primary">
          포인트 사용
        </Button>
        <Button classes={{ root: classes.button }} onClick={handleSavingPoint} color="primary">
          포인트 적립
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(TopButtons);
