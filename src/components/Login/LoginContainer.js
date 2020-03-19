import React from "react";
import {connect} from "react-redux";
import {setLogin} from "../../redux/auth-reducer";
import LoginPage from "./Login";


class LoginContainer extends React.Component {
    render() {
        return (
            <LoginPage props={this.props} setLogin={this.props.setLogin} />
        )
    }
};


let mapStateToProps = (store) => {
    return {
        isLogin: store.authReducer.isLogin,
    }
};

export default connect(mapStateToProps, {setLogin})(LoginContainer);
