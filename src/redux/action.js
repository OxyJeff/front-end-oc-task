export function addEvent(event) {
  return {
    type: 'ADD_EVENT',
    payload: event
  };
}

export function monthChange(date) {
  return {
    type: 'MONTH_CHANGE',
    payload: date
  };
}
