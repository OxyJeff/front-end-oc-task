import { combineReducers } from 'redux';

const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    case 'SET_EVENTS':
      return action.payload;
    default:
      return state;
  }
};

const date = (state = new Date(), action) => {
  switch (action.type) {
    case 'MONTH_CHANGE':
      return action.payload;
    default:
      return state;
  }
};
export default combineReducers({
  events,
  date
});
