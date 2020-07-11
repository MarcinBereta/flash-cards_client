import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Root from './Root/index.js'
import LearnView from '../views/learn_page/index'
import OptionView from '../views/option_page/index'
import HomeView from '../views/home_page/index'
import ProfileView from '../views/profile_page/index'
import RegisterView from '../views/register_page/index'
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
                <Route component={()=><h1>Strona 404</h1>} /> // Zrobić osobny komponent
            </Switch>
        </BrowserRouter>
    )
}

export default App;
