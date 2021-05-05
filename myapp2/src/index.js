import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/common/header'
import Select from './components/common/Select'

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
          <Route path='/' component={Select} exact />
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
