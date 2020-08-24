import React, {useEffect} from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import UserApi from '../utils/usersApi';

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
import AdminRoute from '../components/routes/adminRoute'
import PrivateUserRoute from '../components/routes/privateRoute'
import Auth from '../utils/auth'
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'
import {setUserLogged,setUserIsAdmin} from '../redux/actions/session'

import "./App.css"

const App = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(Auth.isTokenActive())
        if(Auth.isTokenActive()){
            
            dispatch(setUserLogged())
            let userId = Auth.getUserId()
            
            UserApi
                .fetchOneUser(userId)
                .then(data =>{
                    if (data.succes){
                        console.log(data)
                        let userInfo = data.user
                        dispatch(setUserIsAdmin(userInfo.isAdmin))
                    } else console.log('nie znaleziono uzytkownika')
                })
        }
    },[])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={StartingView} />
                <Route path='/register'component={RegisterView} />
                <Route path='/login' component={LoginView} />
                <PrivateUserRoute path='/home' component={Root} />
                <PrivateUserRoute path='/learn'component={LearnView} />
                <PrivateUserRoute path='/option'component={OptionView} />
                <PrivateUserRoute path='/profile'component={ProfileView} />
                <Route path='/code' component={CodeView} />
                <AdminRoute path='/adminPanel' component={AdminPanelView} />
                <Route component={PageNotFoundView} />
            </Switch>
        </BrowserRouter>
    )
}

const mapDispatchToProps = dispatch =>({
    setUserLogged: () => {dispatch(setUserLogged())}
})

export default connect(()=>({}), mapDispatchToProps)(App);
