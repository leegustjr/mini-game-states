import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './WriteArticle.css';
import { changeDisplaymode } from '../actions';

axios.defaults.withCredentials = true;
class WriteArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contents: '',
    };
  }

  handleInputValue = (key) => (e) => {
    const result = this.state;
    result[key] = e.target.value;
    this.setState(result);
  };

  submitArticle = () => {
    const { title, contents } = this.state;
    const { nickname } = this.props;
    const body = {
      title,
      contents,
      nickname,
    };

    const config = {
      // eslint-disable-next-line react/destructuring-assignment
      headers: { Authorization: this.props.token.accessToken },
    };
    axios
      .post('http://13.209.41.64:4100/articles', body, config)
      .then(() => {
        const { changeDisplayMode } = this.props;
        changeDisplayMode('NOTICEBOARD');
      })
      .catch((err) => alert(err));
  };

  render() {
    return (
      <section id="display">
        {/* 여기부터 body */}
        <div id="ArticleBox">
          <form>
            <div className="form-group">
              <label>Title</label>
              <input
                type="title"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="제목을 입력해 주세요."
                onChange={this.handleInputValue('title')}
              />
            </div>
            <div className="form-group">
              <label>Text Content</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="15"
                onChange={this.handleInputValue('contents')}
              />
            </div>
          </form>
          <div id="submit">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                const { changeDisplayMode } = this.props;
                changeDisplayMode('NOTICEBOARD');
              }}
            >
              Back
            </button>
          </div>
          <div id="submit">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                this.submitArticle();
              }}
            >
              submit
            </button>
          </div>
        </div>
        {/* 여기가 끝입니다 */}
      </section>
    );
  }
}

export default withRouter(WriteArticle);
