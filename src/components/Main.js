import React from 'react';
import { withRouter } from 'react-router-dom';
import Display from '../containers/Display';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import NoticeBoard from '../containers/NoticeBoard';
import './Main.css';
// import NoticeBoard from './NoticeBoard';

function Main(props) {
  return (
    <section id="BG">
      <Info />
      <div id="wrapper">
        <Menu />
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div
              className="btn btn-link"
              role="button"
              id="menu-toggle"
              href="#menu-toggle"
            >
              <i className="fa fa-bars"></i>
              <div id="menu-toggle" className="btn btn-link">
                menu
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <section id="display">
                  <NoticeBoard />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(Main);
