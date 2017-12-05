import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SavePoint from './components/SavePoint';
import * as savePointActions from './data/savePoint/actions';
import { turnOnSimpleMessage } from '../../components/SimpleMessage/index';

class Point extends React.Component {
  constructor(props) {
    super(props);
    this.savePointHandler = this.savePointHandler.bind(this);
  }
  savePointHandler(info) {
    this.props.savePointRequest({
      phone: info.inputPhone,
      point: info.inputPoint,
    })
      .then((data) => {
        if (this.props.savePoint.status === 'FAILURE') {
          throw data;
        } else {
          console.log('hi');
        }
      })
      .catch((data) => {
        console.log(data);
        turnOnSimpleMessage.error('적립 실패');
      });
  }
  render() {
    return (
      <div>
        <SavePoint
          onSavePoint={this.savePointHandler}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  savePoint: state.point.data.savePoint,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  savePointRequest: savePointActions.request,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Point);
