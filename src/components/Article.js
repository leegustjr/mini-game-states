import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Article.css';

class Article extends Component {
  componentDidMount() {}

  clickLikes = () => {
    this.postLikesAndDislikes('like');
  };

  clickDislikes = () => {
    this.postLikesAndDislikes('dislike');
  };

  postLikesAndDislikes = (likeOrDislike) => {
    let { id, likes, dislikes } = this.props.article;
    likeOrDislike === 'like' ? (likes += 1) : (dislikes += 1);

    axios
      .put(`http://13.209.41.64:4100/articles/${id}`, { likes, dislikes })
      .then(() => {
        alert('추가되었습니다');
        axios
          .get('http://13.209.41.64:4100/articles')
          .then((res) => {
            const { changeCurrentArticle } = this.props;
            const update = res.data.filter((val) => val.id === id);
            changeCurrentArticle(update[0]);
          })
          .catch((err) => alert(err));
      })
      .catch((err) => alert(err));
  };

  render() {
    const { title, contents, created_at, likes, dislikes } = this.props.article;
    return (
      <section id="display">
        <button
          type="button"
          id="back"
          onClick={() => {
            const { changeDisplayMode } = this.props;
            changeDisplayMode('NOTICEBOARD');
          }}
        >
          BACK
        </button>
        <div id="row">
          <div className="col-11">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">
                    <h2>{title}</h2>
                    <div id="created">{created_at}</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th id="contentBox" scope="row">
                    <div id="contents">{contents}</div>

                    <div id="imgBox">
                      <img id="like" alt="" onClick={this.clickLikes} />
                      <span>{likes}</span>
                      <img id="dislike" alt="" onClick={this.clickDislikes} />
                      <span>{dislikes}</span>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Article);

// <section id="display">
//                     <div id="row">
//                       <div className="col-11">
//                         <table className="table">
//                           <thead className="thead-light">
//                             <tr>
//                               <th scope="col">
//                                 <h2>{title}</h2>
//                                 <div id="created">{created_at}</div>
//                               </th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th id="contentBox" scope="row">
//                                 <div id="contents">{contents}</div>

//                                 <div id="imgBox">
//                                   <img
//                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/400px-Bot%C3%B3n_Me_gusta.svg.png"
//                                     width="50px"
//                                     height="50px"
//                                     alt="likes"
//                                   />
//                                   <span>{likes}</span>
//                                   <img
//                                     src="http://img.hani.co.kr/imgdb/resize/2015/0917/144240205537_20150917.JPG"
//                                     width="50px"
//                                     height="50px"
//                                     alt="dislikes"
//                                   />
//                                   <span>{dislikes}</span>
//                                 </div>
//                               </th>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </section>
