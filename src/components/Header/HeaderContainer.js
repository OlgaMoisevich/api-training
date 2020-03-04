import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import {setAuthData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, { withCredentials: true }).then(response=>{
            console.log('555',response)
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