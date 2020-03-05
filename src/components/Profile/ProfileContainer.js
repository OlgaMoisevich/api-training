import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import Api from "../../api/api"


class ProfileContainerComponent extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        Api.set_profile(userId).then(response => {
            this.props.setProfile(response.data)
        });
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
    setProfile,

})(withRouter(ProfileContainerComponent));

export default ProfileContainer