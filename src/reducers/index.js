import {
  IS_LOGINED,
  CHANGE_DISPLAYMODE,
  SET_GAME,
  NICKNAME,
  ARTICLES,
  LEADER_BOARD,
  CHANGE_TOKEN,
  CHANGE_CURRENTARTICLE,
  MY_SCORE,
} from '../actions';

const initialState = {
  isLogined: false,
  displayMode: 'NOTICEBOARD',
  currentGame: null,
  articles: [],
  article: [],
  nickname: 'guest',
  leaderBoard: {},
  gameList: [
    {
      gameID: 0,
      gameTitle: 'Snake',
      thumbnail: 'snake.png',
    },
    {
      gameID: 1,
      gameTitle: 'Tetris',
      thumbnail: 'tetris.jpg',
    },
    {
      gameID: 2,
      gameTitle: 'Sudoku',
      thumbnail: 'sudoku.png',
    },
  ],
  myScore: {
    nickname: 'black tardis',
    games: [
      {
        gameTitle: 'Snake',
        scores: ['-'],
      },
      {
        gameTitle: 'Tetris',
        scores: ['-'],
      },
      {
        gameTitle: 'Sudoku',
        scores: ['-'],
      },
    ],
  },
  token: {
    accessToken: '',
    refreshToken: '',
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGINED: {
      return {
        ...state,
        isLogined: !state.isLogined,
      };
    }

    case CHANGE_DISPLAYMODE: {
      return {
        ...state,
        displayMode: action.displayMode,
      };
    }
    case SET_GAME: {
      return {
        ...state,
        currentGame: action.gameID,
      };
    }

    case NICKNAME: {
      return {
        ...state,
        nickname: action.nickname,
      };
    }

    case ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }

    case LEADER_BOARD: {
      return {
        ...state,
        leaderBoard: action.leaderBoard,
      };
    }

    case CHANGE_TOKEN: {
      return {
        ...state,
        token: {
          accessToken: action.token.accessToken,
          refreshToken: action.token.refreshToken,
        },
      };
    }

    case CHANGE_CURRENTARTICLE: {
      return {
        ...state,
        article: action.article,
      };
    }

    case 'CHANGE_MY_SNAKE_SCORE': {
      const changeMyscore = state.myScore;
      changeMyscore.nickname = action.nickname;
      state.myScore.games[0].scores = action.myScore;
      return {
        ...state,
        myScore: changeMyscore,
      };
    }
    case 'CHANGE_MY_TETRIS_SCORE': {
      const changeMyscore = state.myScore;
      changeMyscore.nickname = action.nickname;
      state.myScore.games[1].scores = action.myScore;
      return {
        ...state,
        myScore: changeMyscore,
      };
    }
    case 'CHANGE_MY_SUDOKU_SCORE': {
      const changeMyscore = state.myScore;
      changeMyscore.nickname = action.nickname;
      state.myScore.games[2].scores = action.myScore;
      return {
        ...state,
        myScore: action.myScore,
      };
    }

    default:
      return state;
  }
};

export default reducers;
