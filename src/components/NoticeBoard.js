import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import NoticeBoardLists from '../containers/NoticeBoardLists';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import './NoticeBoard.css';

const shortid = require('shortid');

axios.defaults.withCredentials = true;
class NoticeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false,
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios
      .get('http://13.209.41.64:4100/articles')
      .then((res) => {
        console.log('success');
        const { changeArticles } = this.props;
        changeArticles(res.data);
      })
      .catch((err) => alert(err));
  };

  moveToArticle = (article) => {
    const { changeCurrentArticle } = this.props;
    changeCurrentArticle(article);
  };

  activateDeleteMode = () => {
    this.setState({ delete: !this.state.delete });
  };

  render() {
    const { articles } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <section id="display">
            <div>
              <table className="table">
                <thead id="asdf" className="thead-light">
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
                      delete={this.state.delete}
                      getArticles={this.getArticles}
                    />
                  ))}
                </tbody>
              </table>
              <div id="asdf">
                {this.state.delete === false ? (
                  <button
                    type="button"
                    id="delete"
                    onClick={this.activateDeleteMode}
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    type="button"
                    id="delete"
                    onClick={this.activateDeleteMode}
                  >
                    취소
                  </button>
                )}
                <button
                  type="button"
                  id="submit"
                  onClick={() => {
                    const { history } = this.props;
                    history.push('/WriteArticle');
                  }}
                >
                  <Link to="/WriteArticle">글쓰기</Link>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(NoticeBoard);
