import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const mapStateToProps = () => ({
});

const TrainingsTable = () => (
  <Table>
    <thead>
      <tr>
        <th>When?</th>
        <th>What?</th>
        <th>How match?</th>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </Table>
);


export default connect(mapStateToProps)(TrainingsTable);
