import React from 'react';
import ReactDOM from 'react-dom';
import 'stylesheets/index.css';
import App from 'App';
import registerServiceWorker from 'helpers/registerServiceWorker';
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';
dayjs.locale('zh-cn');
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
