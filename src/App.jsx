import React, { PureComponent } from 'react';
import Calendar from 'components/Calendar';
import Header from 'components/Header';
import { EventModal } from 'components/Event';
import './App.css';

class App extends PureComponent {
  state = {
    date: new Date(),
    eventModalVisible: false
  };

  onDateChange = date => {
    if (date instanceof Date) {
      this.setState({
        date
      });
    }
  };

  render() {
    const { date, eventModalVisible } = this.state;
    return (
      <div className="App">
        <Header date={date} onDateChange={this.onDateChange} />
        <section className="content">
          <Calendar
            date={date}
            onDateClick={() => {
              this.setState({ eventModalVisible: true });
            }}
          />
        </section>
        <EventModal
          date={date}
          visible={eventModalVisible}
          onClose={() => {
            this.setState({ eventModalVisible: false });
          }}
        />
      </div>
    );
  }
}

export default App;
