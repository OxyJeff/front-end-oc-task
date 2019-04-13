import React, { PureComponent } from 'react';
import Calendar from 'components/Calendar';
import Header from 'components/Header';
import './App.css';

class App extends PureComponent {
  state = {
    date: new Date()
  };

  onDateChange = date => {
    if (date instanceof Date) {
      this.setState({
        date
      });
    }
  };

  render() {
    const { date } = this.state;
    return (
      <div className="App">
        <Header date={date} onDateChange={this.onDateChange} />
        <section className="content">
          <Calendar date={date} />
        </section>
      </div>
    );
  }
}

export default App;
