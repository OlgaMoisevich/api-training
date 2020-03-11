import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainerComponent extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.setProfileThunkCreator(userId);
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}



let mapStateToProps = (store) => {
    return {
        profile: store.profilePage.profile,
    }
};



const ProfileContainer = connect(mapStateToProps, {
    setProfileThunkCreator

})(withRouter(ProfileContainerComponent));

export default ProfileContainer