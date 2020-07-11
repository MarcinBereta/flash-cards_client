import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Root from './Root/'
import LearnView from '../views/learn_page/'
import OptionView from '../views/option_page/'
import HomeView from '../views/home_page/'
import ProfileView from '../views/profile_page/'
import RegisterView from '../views/register_page/'
import LoginView from '../views/login_page/'
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Root} />
                <Route path='/learn'component={LearnView} />
                <Route path='/option'component={OptionView} />
                <Route path='/profile'component={ProfileView} />
                <Route path='/register'component={RegisterView} />
                <Route path='/login' component={LoginView} />
                <Route component={()=><h1>Strona 404</h1>} /> // Zrobić osobny komponent
            </Switch>
        </BrowserRouter>
    )
}

export default App;
