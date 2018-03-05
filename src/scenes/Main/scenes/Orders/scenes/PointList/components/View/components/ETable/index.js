import React, { Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import EHeader from '../EHeader';
import EToolBar from '../EToolBar';

const styles = theme => ({
  root: {
    width: '100%',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      order: 'asc',
      orderBy: 'calories',
      data: this.props.list,
      page: 0,
      rowsPerPage: 25,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isCummulated !== nextProps.isCummulated || this.props.list.length !== nextProps.list.length) {
      this.setState({
        data: nextProps.list,
      });
    }
  }
  handleRequestSort = (event, id) => {
    const orderBy = id;
    let order = 'desc';

    if (this.state.orderBy === id && this.state.order === 'desc') {
      order = 'asc';
    }
    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };

  handleClick = (event, id) => {

  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const {
      classes,
      isCummulated,
      toggleCummulated,
    } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    console.log(data);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return (
      <Paper className={classes.root}>
        <EToolBar
          isCummulated={isCummulated}
          toggleCummulated={toggleCummulated}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <EHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              isCummulated={isCummulated}
            />
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, n.id)}
                    tabIndex={-1}
                    key={n.id}
                  >
                    {
                      isCummulated ?
                        <Fragment>
                          <TableCell padding="none">{n.phone}</TableCell>
                          <TableCell numeric>{n.point}</TableCell>
                        </Fragment> :
                        <Fragment>
                          <TableCell padding="none">{n.customer.phone}</TableCell>
                          <TableCell numeric>{n.pointChange}</TableCell>
                          <TableCell >{new Date(n.datetime).toLocaleString()}</TableCell>
                        </Fragment>
                    }
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 50, 100]}
                  colSpan={6}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  backIconButtonProps={{
                    'aria-label': 'Previous Page',
                  }}
                  nextIconButtonProps={{
                    'aria-label': 'Next Page',
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(EnhancedTable);
