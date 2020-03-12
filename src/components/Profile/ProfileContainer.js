import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileThunkCreator} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";


class ProfileContainerComponent extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.setProfileThunkCreator(userId);
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}


let WithUrlDataContainerComponent = WithAuthRedirect(ProfileContainerComponent);
console.log('WithUrlDataContainerComponent', WithUrlDataContainerComponent);

let mapStateToProps = (store) => {
    return {
        profile: store.profilePage.profile,
        authData: store.authReducer.isAuth,
    }
};

const ProfileContainer = connect(mapStateToProps, {
    setProfileThunkCreator

})(withRouter(WithUrlDataContainerComponent));

export default ProfileContainer