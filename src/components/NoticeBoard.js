import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import NoticeBoardLists from './NoticeBoardLists';
import Info from '../containers/Info';
import Menu from '../containers/Menu';

const shortid = require('shortid');

axios.defaults.withCredentials = true;
class NoticeBoard extends Component {
  componentDidMount() {
    const config = {
      // eslint-disable-next-line react/destructuring-assignment
      headers: { Authorization: this.props.token.accessToken },
    };

    axios
      .get('http://13.209.41.64:4100/articles', config)
      .then((res) => {
        const { changeArticles } = this.props;
        changeArticles(res.data);
      })
      .catch((err) => alert(err));
  }

  moveToArticle = (article) => {
    const { changeCurrentArticle } = this.props;
    changeCurrentArticle(article);
  };

  render() {
    const { articles } = this.props;

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
                <i className="fa fa-bars" />
                <div id="menu-toggle" className="btn btn-link">
                  menu
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <section id="display">
                    <div>
                      <table className="table">
                        <thead className="thead-light">
                          <tr>
                            <th width="10%" scope="col">
                              번호
                            </th>
                            <th width="60%" scope="col">
                              Title
                            </th>
                            <th width="10%" scope="col">
                              Author
                            </th>
                            <th width="20%" scope="col">
                              Created_at
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {articles.map((val, idx) => (
                            <NoticeBoardLists
                              key={shortid.generate()}
                              article={val}
                              idx={idx}
                              moveToArticle={this.moveToArticle}
                            />
                          ))}
                        </tbody>
                      </table>
                      <button type="button">
                        <Link to="/WriteArticle">글쓰기</Link>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(NoticeBoard);
