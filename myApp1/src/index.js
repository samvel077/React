import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/common/header'
import List from './components/list/list'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Detail from './components/detail/Detail'
import NotFound from './components/notfound/NotFound'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route path='/' component={List} exact />
          <Route path='/currency/:id' component={Detail} exact />
          <Route component={NotFound} />
        </Switch>

      </div>
    </BrowserRouter>

  )
}


ReactDom.render(<div>
  <App />
</div>, document.getElementById('root'))
