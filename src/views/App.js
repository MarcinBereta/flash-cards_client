import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import StartingView from '../views/starting_page/'
import Root from './Root/'
import LearnView from '../views/learn_page/'
import OptionView from '../views/option_page/'
import ProfileView from '../views/profile_page/'
import RegisterView from '../views/register_page/'
import LoginView from '../views/login_page/'
import CodeView from '../views/code_page/'
import AdminPanelView from '../views/adminPanel_page'
import PageNotFoundView from '../views/404_page'
import PrivateUserRoute from '../components/routes/privateRoute'

import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={StartingView} />
                <Route path='/home' component={Root} />
                <Route path='/learn'component={LearnView} />
                <Route path='/option'component={OptionView} />
                <Route path='/profile'component={ProfileView} />
                <Route path='/register'component={RegisterView} />
                <Route path='/login' component={LoginView} />
                <Route path='/code' component={CodeView} />
                <PrivateUserRoute path='/adminPanel' component={AdminPanelView} />
                <Route component={PageNotFoundView} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
