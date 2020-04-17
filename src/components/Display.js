import React from 'react';
import LeaderBoard from '../containers/LeaderBoard';
import NoticeBoard from '../containers/NoticeBoard';
import './Main.css';

// path분기 필요 Game, NoticeBoard, LeaderBoard
function Display() {
  return (
    <div className="page-content-wrapper">
      <div className="container-fluid">
        <div
          className="btn btn-link"
          role="button"
          id="menu-toggle"
          href="#menu-toggle"
        />
        <div className="row">
          <div className="col-md-12">
            <section id="display">
              {/* <switch>
              <Route exact path="/game" render={() => <Game />} />
              <Route
                exact
                path="/leaderboard"
                render={() => <Leaderboard />}
              />
              <Route
                exact
                path="/noticeboard"
                render={() => <Noticeboard />}
              />
            </switch> */}
            </section>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   this is Display component
    //   <LeaderBoard />
    //   <NoticeBoard />
    // </div>
  );
}

export default Display;
