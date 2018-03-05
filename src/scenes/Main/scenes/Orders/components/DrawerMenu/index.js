import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
  listItem: {
    height: '50px',
  },
};
class DrawerMenu extends React.Component {
  render() {
    const {
      classes,
      open,
      onClose,
      handleLogout,
      handleOpeningPointPage,
      togglePastOrders,
      pastOrdersToggled,
    } = this.props;
    return (
      <Drawer open={open} onClose={onClose}>
        <div
          tabIndex={0}
          role="button"
          onClick={onClose}
          onKeyDown={onClose}
        >
          <div className={classes.list}>
            <List>
              <ListItem
                button
                classes={{ root: classes.listItem }}
                onClick={handleOpeningPointPage}
              >
                <ListItemText primary="포인트 적립 페이지 열기" />
              </ListItem>
              <ListItem
                button
                classes={{ root: classes.listItem }}
                onClick={togglePastOrders}
              >
                <ListItemText primary={pastOrdersToggled ? '현재 주문 내역 보기' : '과거 주문 내역 보기'} />
              </ListItem>
              <ListItem
                button
                classes={{ root: classes.listItem }}
                onClick={handleLogout}
              >
                <ListItemText primary="로그아웃" />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    );
  }
}
export default withStyles(styles)(DrawerMenu);
