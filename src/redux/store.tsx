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

export const dispatchAddNum = (name: string) => {
    return {
      type: ADD_NUM,
      name,
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
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
