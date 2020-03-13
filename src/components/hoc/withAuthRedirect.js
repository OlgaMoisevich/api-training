import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (store) => {
    return {
        authData: store.authReducer.isAuth,
    }
};

export const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.authData) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect, {})(RedirectComponent);
    return ConnectedAuthRedirectComponent
};


