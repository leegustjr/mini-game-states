import React from 'react';
import './Main.css';
import { withRouter, Link } from 'react-router-dom';

function Menu(props) {
  const { changeDisplayMode } = props;
  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li className="d-xl-flex sidebar-brand" id="BTImg" />
        <li onClick={() => changeDisplayMode('GAMES')}>Games</li>
        <li onClick={() => changeDisplayMode('LEADERBOARD')}>Leaderboard</li>
        <li onClick={() => changeDisplayMode('NOTICEBOARD')}>Noticeboard</li>
      </ul>
    </div>
  );
}

export default withRouter(Menu);
