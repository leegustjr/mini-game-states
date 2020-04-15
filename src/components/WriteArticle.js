import React, { Component } from 'react';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import axios from 'axios';

axios.defaults.withCredentials = true;
class WriteArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  handleInputValue = (key) => (e) => {
    const result = this.state;
    result[key] = e.target.value;
    this.setState(result);
  };

  submitArticle = () => {
    const body = {
      title: this.state.title,
      content: this.state.content,
      nickname: this.state.nickname,
    };
    const config = {
      headers: { Authorization: this.props.token.accessToken },
    };
    axios.post('http://14.41.86.57:4100/articles', body, config);
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
                <i className="fa fa-bars"></i>
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
                            rows="20"
                            onChange={this.handleInputValue('content')}
                          ></textarea>
                        </div>
                      </form>
                      <div id="submit">
                        <button
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

export default WriteArticle;
