import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileThunkCreator} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainerComponent extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.setProfileThunkCreator(userId);
    }

    render() {
        if(!this.props.authData)return  <Redirect to={'/login'}/>;
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}



let mapStateToProps = (store) => {
    return {
        profile: store.profilePage.profile,
        authData: store.authReducer.isAuth,
    }
};



const ProfileContainer = connect(mapStateToProps, {
    setProfileThunkCreator

})(withRouter(ProfileContainerComponent));

export default ProfileContainer