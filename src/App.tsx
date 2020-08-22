import './App.css';
import * as React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import RouteWrapper from './components/Router/RouteWrapper';
import Home from './scenes/home';
import { EcoLayout } from './components/Layout/EcoLayout';
declare global {
  interface Window { jQuery: any; }
}
window.jQuery = $;
require('bootstrap');

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper path="/" component={Home} layout={EcoLayout} />
      </Switch>
    </BrowserRouter> 
  );
};
export default App;
