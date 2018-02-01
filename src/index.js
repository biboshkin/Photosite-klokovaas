import React from 'react'
import 'babel-polyfill'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './reducers/configureStore'
import RouteTransition from './components/RouteTransition'
import Menu from './components/Menu'
import MobileNav from './components/MobileNav'
import Home from './views/Home'
import Contact from './views/Contact'
import Collection from './views/Collection'
import Album from './views/Album'

class App extends React.Component {
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
  <Provider store={ configureStore() }>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="contact" component={ Contact } />
        <Route path="collections/:id" component={ Collection } />
        <Route path="collections/albums/:id" component={ Album } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))