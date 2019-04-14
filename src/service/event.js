import db from './db';

export async function saveEvent({ id, date, hours, minutes, name }) {
  return db.event.add({ id, date, hours, minutes, name });
}

export async function fetchAllEvents() {
  return db.event.toArray();
}
