import Dexie from 'dexie';
const db = new Dexie('Calendar');
db.version(1).stores({ event: '++id,name,hours,minutes,date' });

export default db;
