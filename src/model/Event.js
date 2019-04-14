import shortid from 'shortid';
import dayjs from 'dayjs';

class Event {
  constructor(obj) {
    if (!obj) {
      return;
    }
    this.name = obj.name;
    this.hours = obj.hours;
    this.minutes = obj.minutes;
    this.date = dayjs(obj.date)
      .set('hour', obj.hours)
      .set('minute', obj.minutes)
      .toDate();
    if (obj.id) {
      this.id = obj.id;
    } else {
      this.id = shortid.generate();
    }
  }
}

export default Event;
