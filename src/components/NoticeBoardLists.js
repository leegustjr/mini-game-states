import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NoticeBoardLists extends Component {
  // constructor(props) {
  //   super(props);
  // }

  moveToArticle = () => {
    const { moveToArticle, article } = this.props;
    moveToArticle(article);
  };

  render() {
    const { article, idx } = this.props;
    return (
      <tr>
        <th scope="row">{idx}</th>
        <td onClick={this.moveToArticle}>
          <Link to="/Article">{article.title}</Link>
        </td>
        <td>{article.nickname}</td>
        <td>{article.created_at}</td>
      </tr>
    );
  }
}

export default withRouter(NoticeBoardLists);
