import db from './db';

export async function createEvent({ date, hours, minutes, name }) {
  return db.event.put({ date, hours, minutes, name });
}

export async function getEvents({ date }) {
  return db.event.toArray();
}
