import React from 'react';
import './Main.css';
import { withRouter, Link } from 'react-router-dom';

function Menu() {
  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li className="d-xl-flex sidebar-brand" id="BTImg" />
        <li>
          <Link to="/Game1">Game</Link>
        </li>
        <li>
          <Link to="/LeaderBoard">Leader Board</Link>
        </li>
        <li>
          <Link to="/NoticeBoard">Notice Board</Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Menu);
