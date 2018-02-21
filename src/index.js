import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Css/Reset.css';
import './Css/index.css';
import Layout from './Layout';
import registerServiceWorker from './registerServiceWorker';


const app = (
    <Router>
        <Layout />
    </Router>

)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
