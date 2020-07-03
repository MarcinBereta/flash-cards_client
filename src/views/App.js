import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Root from './Root/index.js'
import LearnView from '../views/learn_page/index'
import OptionView from '../views/option_page/index'
import HomeView from '../views/home_page/index'
import ProfileView from '../views/profile_page/index'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Root} />
                <Route path='/learn'component={LearnView} />
                <Route path='/option'component={OptionView} />
                <Route path='/home'component={HomeView} />
                <Route path='/profile'component={ProfileView} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
