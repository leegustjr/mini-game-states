import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import './Main.css';
import './leaderboard.css';
import { gameType } from '../actions';

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
    // console.log(this.props);
    // const config = {
    //   headers: { Authorization: this.props.token.accessToken },
    // };
    // axios
    //   .post('http://14.41.86.57:4100/scores/scores', config)
    //   .then((res) => {
    //     for (let i = 0; i < res.data.games.length; i += 1) {
    //       res.data.games[i].scores.sort((a, b) => b.place - a.place);
    //     }
    //     this.props.changeMyScore(res.data);
    //   })
    //   .catch((err) => console.log('요긴가?', err));
    this.getGame1Score();
    this.getGame2Score();
    this.getGame3Score();
  }

  getGame1Score() {
    console.log('hello');
    axios
      .post('http://13.209.41.64:4100/scores/leaderboard', {
        gameTitle: 'Test Game 1',
      })
      .then((res) => {
        this.setState({ game1Score: res.data.leaderboard });
      })
      .catch((error) => console.log('여기야 여기', error.response));
  }

  getGame2Score() {
    axios
      .post('http://13.209.41.64:4100/scores/leaderboard', {
        gameTitle: 'Test Game 2',
      })
      .then((res) => {
        this.setState({ game2Score: res.data.leaderboard });
      })
      .catch((err) => console.log(err));
  }

  getGame3Score() {
    axios
      .post('http://127.0.0.1:4100/scores/leaderboard', {
        gameTitle: 'Game 3',
      })
      .then((res) => {
        this.setState({ game3Score: res.data.leaderboard });
      })
      .catch((err) => console.log(err));
  }

  render() {
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
                          <td>{val}</td>
                        </tr>
                      ))}
                      <tr>
                        <td>My Score</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive" id="table1">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan="2">Game1</th>
                      </tr>
                      <tr>
                        <th>nickname</th>
                        <th>score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {console.log(this.state.game1Score)} */}
                      {this.state.game1Score.map(({ score, nickname }) => {
                        return (
                          <tr>
                            <td>{nickname ? nickname : '????'}</td>
                            <td>{score ? score : '-'}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="2">
                          {this.props.myScore.games[1].scores[0]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive" id="table2">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan="2">Game2</th>
                      </tr>
                      <tr>
                        <th>nickname</th>
                        <th>score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.game2Score.map(({ score, nickname }) => (
                        <tr>
                          <td>{nickname ? nickname : '-'}</td>
                          <td>{score ? score : '-'}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="2">
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
                        <th colSpan="2">Game3</th>
                      </tr>
                      <tr>
                        <th>nickname</th>
                        <th>score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.game3Score.map(({ score, nickname }) => (
                        <tr>
                          <td>{nickname ? nickname : '-'}</td>
                          <td>{score ? score : '-'}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="2">
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
        {/* <div className="table-responsive" id="table2">
          <table className="table">
            <thead>
              <tr>
                <th>nickname</th>
                <th>score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>멋쟁이산</td>
                <td>100</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>{this.props.myScore.nickname}</td>
                <td>{this.props.myScore.games[1].scores[0]}</td>
              </tr>
            </tbody>
          </table>
        </div> */}
        {/* <div className="table-responsive" id="table3">
          <table className="table">
            <thead>
              <tr>
                <th>nickname</th>
                <th>score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>멋쟁이산</td>
                <td>100</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>{this.props.myScore.nickname}</td>
                <td>{this.props.myScore.games[2].scores[0]}</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    );
  }
}
export default withRouter(LeaderBoard);
