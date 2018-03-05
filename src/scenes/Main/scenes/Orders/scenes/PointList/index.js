import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import * as snackBarActions from '../../../../../../data/snackBar/actions';
import * as noticeDialogActions from '../../../../../../data/noticeDialog/actions';
import * as getPointListActions from './data/getPointList/actions';
import View from './components/View';

class Index extends React.Component {
  componentDidMount() {
    this.props.getPointListRequest();
  }
  render() {
    const {
      getPointList,
      history,
    } = this.props;
    return (
      <View
        list={getPointList.data}
        onClose={() => history.goBack()}
      />
    );
  }
}
const mapStateToProps = state => ({
  getPointList: state.main.orders.pointList.data.getPointList,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  push,
  noticeDialogOn: noticeDialogActions.on,
  noticeDialogOff: noticeDialogActions.off,
  showError: noticeDialogActions.error,
  getPointListRequest: getPointListActions.request,
  showSnackBar: snackBarActions.show,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
