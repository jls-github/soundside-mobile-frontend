import React from 'react';
import {sortableHandle} from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <span>::</span>)

export default DragHandle