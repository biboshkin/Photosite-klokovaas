import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createHistory } from 'history'
import createHashHistory from 'history/lib/createHashHistory'
import configureStore from './reducers/configureStore'
import RouteTransition from './components/RouteTransition'
import Menu from './components/Menu'
import MobileNav from './components/MobileNav'
import Home from './views/Home'
import Contact from './views/Contact'
import Collection from './views/Collection'


let history = createHashHistory({
  queryKey: false
});

const store = configureStore();

class App extends React.Component {

  componentDidMount() {
    // setTimeout(() =>{
      document.getElementById("app").className = "show";
      document.getElementById("loader").className = "delete";
    // }, 3000);
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <Menu />
        <MobileNav />
        <RouteTransition pathname={ this.props.location.pathname } style={{ visibility: 'hidden' }}>
          {this.props.children}
        </RouteTransition>
      </div>
    )
  }
}

render((
  <Provider store={ store }>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="contact" component={ Contact } />
        <Route path="collections/:id" component={ Collection } />
        <Route path="collections/albums/:id" component={ Collection } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))