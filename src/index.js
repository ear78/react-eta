import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import registerServiceWorker from './registerServiceWorker';


const app = (
    <Router>
        <Layout />
    </Router>

)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
