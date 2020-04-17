import React from 'react';
import { withRouter } from 'react-router-dom';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import NoticeBoard from '../containers/NoticeBoard';
import LeaderBoard from '../containers/LeaderBoard';
import Games from '../containers/Games';
import Article from '../containers/Article';
import WriteArticle from '../containers/WriteArticle';
import './Main.css';
// import NoticeBoard from './NoticeBoard';

function Main(props) {
  const display = () => {
    const { displayMode } = props;

    switch (displayMode) {
      case 'NOTICEBOARD': {
        return <NoticeBoard />;
      }
      case 'LEADERBOARD': {
        return <LeaderBoard />;
      }
      case 'GAMES': {
        return <Games />;
      }
      case 'ARTICLE': {
        return <Article />;
      }
      case 'WRITEARTICLE': {
        return <WriteArticle />;
      }

      default:
        return <NoticeBoard />;
    }
  };
  return (
    <section>
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
            />
            <div className="row">
              <div className="col-md-12">
                <section id="display">{display()}</section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(Main);
