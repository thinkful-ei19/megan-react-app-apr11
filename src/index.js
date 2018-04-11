import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Diary from './components/main.diary';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Diary />, document.getElementById('root'));
registerServiceWorker();
