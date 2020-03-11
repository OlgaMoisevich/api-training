import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthDataThunkCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthDataThunkCreator()
    }

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

let HeaderContainerConnect = connect(mapStateToProps, {setAuthDataThunkCreator})(HeaderContainer);
export default HeaderContainerConnect