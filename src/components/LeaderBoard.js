import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Main.css';
import './leaderboard.css';
const shortid = require('shortid');

axios.defaults.withCredentials = true;
class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game1Score: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      game2Score: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      game3Score: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    };
  }

  componentDidMount() {
    this.getMyScore();
    this.getGame1Score();
    this.getGame2Score();
    this.getGame3Score();
  }

  getMyScore() {
    const { nickname, changeMyScore } = this.props;

    if (nickname === 'guest') {
      return;
    }
    const config = {
      headers: { Authorization: this.props.token.accessToken },
    };

    axios
      .get('http://13.209.41.64:4100/scores/scores', config)
      .then((res) => {
        // for (let i = 0; i < res.data.games.length; i += 1) {
        //   res.data.games[i].scores.sort((a, b) => b.place - a.place);
        // }
        res.data.games.forEach((val) => {
          if (val.gameTitle === 'Snake') {
            const highestScore = val.scores.sort((a, b) => b - a);
            changeMyScore('SNAKE', highestScore, nickname);
          } else if (val.gameTitle === 'Tetris') {
            const highestScore = val.scores.sort((a, b) => b - a);
            changeMyScore('TETRIS', highestScore, nickname);
          } else if (val.gameTitle === 'Sudoku') {
            const highestScore = val.scores.sort((a, b) => b - a);
            changeMyScore('TETRIS', highestScore, nickname);
          }
        });
      })
      .catch((err) => console.log(err));
  }

  getGame1Score() {
    axios
      .post('http://13.209.41.64:4100/scores/leaderboard', {
        gameTitle: 'Snake',
      })
      .then((res) => {
        if (res.data.leaderboard.length < 10) {
          while (res.data.leaderboard.length < 10) {
            res.data.leaderboard.push({
              place: '?',
              nickname: '????',
              score: '-',
            });
          }
        }
        this.setState({ game1Score: res.data.leaderboard });
      })
      .catch((error) => console.log(error));
  }

  getGame2Score() {
    axios
      .post('http://13.209.41.64:4100/scores/leaderboard', {
        gameTitle: 'Tetris',
      })
      .then((res) => {
        if (res.data.leaderboard.length < 10) {
          while (res.data.leaderboard.length < 10) {
            res.data.leaderboard.push({
              place: '?',
              nickname: '????',
              score: '-',
            });
          }
        }
        this.setState({ game2Score: res.data.leaderboard });
      })
      .catch((err) => console.log(err));
  }

  getGame3Score() {
    axios
      .post('http://13.209.41.64:4100/scores/leaderboard', {
        gameTitle: 'Sudoku',
      })
      .then((res) => {
        if (res.data.leaderboard.length < 10) {
          while (res.data.leaderboard.length < 10) {
            res.data.leaderboard.push({
              place: '?',
              nickname: '????',
              score: '-',
            });
          }
        }
        this.setState({ game3Score: res.data.leaderboard });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { nickname } = this.props;
    return (
      <div className="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <section id="display">
                <div className="table-responsive" id="num">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Game</th>
                      </tr>
                      <tr>
                        <th>*</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                        <tr key={val}>
                          <td id="middle">{val}</td>
                        </tr>
                      ))}
                      <tr>
                        <td id="middle">My Score</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive" id="table1">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan="2">Snake</th>
                      </tr>
                      <tr>
                        <th>nickname</th>
                        <th>score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.game1Score.map(({ score, nickname }) => (
                        <tr key={shortid.generate()}>
                          <td id="middle">{nickname ? nickname : '????'}</td>
                          <td id="middle">{score ? score : '-'}</td>
                        </tr>
                      ))}
                      <tr>
                        <td id="middle">
                          {nickname === 'guest' ? '-' : nickname}
                        </td>
                        <td id="middle">
                          {this.props.myScore.games[0].scores[0]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive" id="table2">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan="2">Tetris</th>
                      </tr>
                      <tr>
                        <th>nickname</th>
                        <th>score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.game2Score.map(({ score, nickname }) => (
                        <tr key={shortid.generate()}>
                          <td id="middle">{nickname ? nickname : '????'}</td>
                          <td id="middle">{score ? score : '-'}</td>
                        </tr>
                      ))}
                      <tr>
                        <td id="middle">
                          {nickname === 'guest' ? '-' : nickname}
                        </td>
                        <td id="middle">
                          {this.props.myScore.games[1].scores[0]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive" id="table3">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan="2">Sudoku</th>
                      </tr>
                      <tr>
                        <th>nickname</th>
                        <th>score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.game3Score.map(({ score, nickname }) => (
                        <tr key={shortid.generate()}>
                          <td id="middle">{nickname ? nickname : '????'}</td>
                          <td id="middle">{score ? score : '-'}</td>
                        </tr>
                      ))}
                      <tr>
                        <td id="middle">
                          {nickname === 'guest' ? '-' : nickname}
                        </td>
                        <td id="middle">
                          {this.props.myScore.games[2].scores[0]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LeaderBoard);
