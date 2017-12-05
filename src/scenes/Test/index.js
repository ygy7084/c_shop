import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as testDataActions from './data/TestListData/actions';
import Input from './components/Input';
import TestList from './components/TestList';
import idGenerator from './modules/idGenerator';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleAddingData = this.handleAddingData.bind(this);
    this.handleRemovingData = this.handleRemovingData.bind(this);
    this.props.getRequest();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.get.list,
    });
  }
  handleAddingData(text) {
    this.setState({
      data: this.state.data.concat({
        text,
        id: idGenerator(),
      }),
    });
  }
  handleRemovingData(item) {
    const newData = JSON.parse(JSON.stringify(this.state.data));
    const index = newData.findIndex(o => o.id === item.id);
    if (index > -1) {
      newData.splice(index, 1);
    }
    this.setState({
      data: newData,
    });
  }
  render() {
    return (
      <div>
        <Input onSubmit={this.handleAddingData} />
        <TestList
          items={this.state.data}
          handleRemove={this.handleRemovingData}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  get: state.test.data.testData.get,
  state,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getRequest: testDataActions.getRequest,
}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Test);
