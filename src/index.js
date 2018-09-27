import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Adding from './Adding';
import View from './View';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Router>
        <div className="">
            <Route exact path="/" component={App} />
            <Route exact path="/Adding" component={Adding} />
            <Route exact path="/App" component={App} />
            <Route exact path="/View" component={View} />
        </div>
    </Router>
    ,rootElement
);
registerServiceWorker();
