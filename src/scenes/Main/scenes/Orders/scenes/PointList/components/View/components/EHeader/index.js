import React from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Tooltip from 'material-ui/Tooltip';

const columnData = [
  { id: 'phone', numeric: false, disablePadding: false, label: '번호' },
  { id: 'pointChange', numeric: true, disablePadding: false, label: '적립' },
  { id: 'datetime', numeric: false, disablePadding: false, label: '날짜' },
];
const columnData_cummulated = [
  { id: 'phone', numeric: false, disablePadding: false, label: '번호' },
  { id: 'point', numeric: true, disablePadding: false, label: '포인트' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { isCummulated, order, orderBy, numSelected, rowCount } = this.props;
    const data = isCummulated ? columnData_cummulated : columnData;
    return (
      <TableHead>
        <TableRow>
          {data.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}
export default EnhancedTableHead;
