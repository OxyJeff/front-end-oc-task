import React, { PureComponent } from 'react';
import Calendar from 'components/Calendar';
import Header from 'components/Header';
import EventModal from 'components/EventModal';
import EventList from 'components/EventList';
import { createStore } from 'redux';
import reducers from 'redux/reducer';
import { Provider } from 'react-redux';
import './App.css';

const store = createStore(reducers);

class App extends PureComponent {
  state = {
    date: new Date(),
    eventModalVisible: false,
    selectedDate: undefined
  };

  onDateChange = date => {
    if (date instanceof Date) {
      this.setState({
        date
      });
    }
  };

  onCreateEvent = () => {
    this.setState({
      eventModalVisible: false,
      selectedDate: undefined
    });
  };

  render() {
    const { date, eventModalVisible, selectedDate } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <Header date={date} onDateChange={this.onDateChange} />
          <div className="main">
            <section className="content">
              <Calendar
                date={date}
                onDateClick={selectedDate => {
                  this.setState({ eventModalVisible: true, selectedDate });
                }}
              />
            </section>
            <section>
              <EventList />
            </section>
            <EventModal
              date={selectedDate}
              visible={eventModalVisible}
              onClose={() => {
                this.setState({ eventModalVisible: false });
              }}
              onSave={this.onCreateEvent}
            />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
