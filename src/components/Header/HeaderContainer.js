import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthData} from "../../redux/auth-reducer";
import Api from "../../api/api"

class HeaderContainer extends React.Component {

    componentDidMount() {
        Api.set_auth_data().then(response=>{
            this.props.setAuthData(response.data.data)
            }
        )
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


let HeaderContainerConnect = connect(mapStateToProps, {setAuthData})(HeaderContainer);
export default HeaderContainerConnect