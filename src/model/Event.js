class Event {
  constructor(obj) {
    if (!obj) {
      return;
    }
    this.name = obj.name;
    this.hours = obj.hours;
    this.minutes = obj.minutes;
    this.date = obj.date;
  }
}
