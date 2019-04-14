import { saveEvent, fetchAllEvents } from 'service/event';

export function addEvent(event) {
  return {
    type: 'ADD_EVENT',
    payload: event
  };
}

export function setEvents(events) {
  return {
    type: 'SET_EVENTS',
    payload: events
  };
}

export function requestAddEvent(event) {
  return dispatch => {
    dispatch({ type: 'REQUEST_ADD_EVENT', payload: event });
    return saveEvent(event).then(() => {
      dispatch(addEvent(event));
    });
  };
}

export function fetchEvents() {
  return dispatch => {
    dispatch({ type: 'REQUEST_FETCH_EVENTs' });
    return fetchAllEvents().then(events => {
      return dispatch(setEvents(events));
    });
  };
}

export function monthChange(date) {
  return {
    type: 'MONTH_CHANGE',
    payload: date
  };
}
