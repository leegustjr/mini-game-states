import React from 'react';
import { Game } from './Game';
import './App.css';
import { SudokuProvider } from './context/SudokuContext';

/**
 * App is the root React component.
 */
export const App = (props) => {
  const { token } = props;
  return (
    <SudokuProvider>
      <Game token={token} />
    </SudokuProvider>
  );
};
