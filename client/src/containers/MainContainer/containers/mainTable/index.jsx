import React from 'react';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import TrainingsTable from './components/TrainingsTable';

const MainTable = () => (
  <>
    <UncontrolledButtonDropdown>
      <DropdownToggle caret size="sm">
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Header</DropdownItem>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
    <TrainingsTable />
  </>
);


export default MainTable;
