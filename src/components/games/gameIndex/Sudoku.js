import React from 'react';
import { App } from './Sudoku/src/App';

const Sudoku = (props) => {
  const { token } = props;
  return (
    <div id="sudoku-root">
      <App token={token} />
    </div>
  );
};

export default Sudoku;
