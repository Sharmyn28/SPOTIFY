import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Feautures from './App';
import Filtro from './filtro';
import Genres from './Genres';
import News from './news';
import {Provider} from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Switch, Route} from 'react-router-dom'

const Index = () => (
   <Provider store={store}>
      <HashRouter>
         <Switch>
            <Route  exact path = "/" component={Feautures}/>
            <Route  exact path = "/feautures" component={Feautures}/>
            <Route  exact path = "/news" component={News}/>
            <Route  exact path = "/filtro" component={Filtro}/>
            <Route  exact path = "/genres" component={Genres}/>
          </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();


