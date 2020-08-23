import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux"

class AdminRoute extends Component {
    render() {
        return (
            <>
                {
                    this.props.isAdmin?
                        <Route {...this.props} />
                        :
                        <Redirect to="/"/>
                }
            </>
        );
    }
}


const mapStateToProps = state =>({
    isAdmin: state.session.isAdmin,
})

export default connect(mapStateToProps)(AdminRoute);