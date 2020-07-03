import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Root from './Root/index.js'
import LearView from '../views/learn_page/index'
import OptionView from '../views/option_page/index'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Root} />
                <Route path='/learn'component={LearView} />
                <Route path='/option'component={OptionView} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
