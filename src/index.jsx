import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MainForm from './components/MainForm/MainFrom';
import * as serviceWorker from './serviceWorker';


const Api = () =><MainForm/> 

ReactDOM.render(<Api />, document.getElementById('root'));

serviceWorker.unregister();
