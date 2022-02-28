import { combineReducers } from 'redux';
// import HomeReducer from '../pages/home/store/reducer';

let defaultState: Array<any> = [];

const todolist = (state: Array<any> = defaultState, action: any) => {
  const newState = [...state];
  switch (action.type) {
    case 'ADD_DATA':
      newState.push(action.value);
      return newState;
    case 'DEL_DATA':
      newState.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};

const reducer = combineReducers({
  Home: todolist
});
export default reducer;
