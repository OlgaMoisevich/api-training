import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfile} from "../../redux/profile-reducer";



class ProfileContainerComponent extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

})(ProfileContainerComponent);

export default ProfileContainer