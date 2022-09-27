import { createStore } from 'redux';

const COUNT = 'count';
const SET_NAME = 'set_name';
const ADD_NUM = 'add_num';

export const dispatchCount = (num: number) => {
  return {
    type: COUNT,
    num,
  };
};

export const dispatchName = (name: string) => {
  return {
    type: SET_NAME,
    name,
  };
};

export const dispatchAddNum = (num: number) => {
  return {
    type: ADD_NUM,
    num,
  };
};

interface IState {
  name: string;
  num: number;
}

const InitialState: IState = {
  name: '',
  num: 0,
};

function reducer(state: IState = InitialState, action: any) {
  switch (action.type) {
    case COUNT:
      return {
        ...state,
        num: action.num,
      };

    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case ADD_NUM:
      return {
        ...state,
        num: parseInt(String(state.num)) + action.num,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
