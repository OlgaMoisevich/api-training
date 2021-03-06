import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {outLogin} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        login: state.authReducer.login,
    }
};

let HeaderContainerConnect = connect(mapStateToProps, {outLogin})(HeaderContainer);
export default HeaderContainerConnect