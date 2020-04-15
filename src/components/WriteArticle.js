import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import './WriteArticle.css';

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
      .post('http://14.41.86.57:4100/articles', body, config)
      .then(() => {
        const { history } = this.props;
        history.push('/NoticeBoard');
      })
      .catch((err) => alert(err));
  };

  render() {
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
                            this.props.history.push('/main');
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(WriteArticle);
