import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileThunkCreator, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


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
        status: store.profilePage.status,
    }
};

export default compose(
    connect(mapStateToProps, {setProfileThunkCreator,  updateStatus,}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainerComponent);

// способ до использования compose (альтернативный способ)

// const WithUrlDataContainerComponent = WithAuthRedirect(ProfileContainerComponent);
// const ProfileContainer = connect(mapStateToProps, {
//     setProfileThunkCreator
// })(withRouter(WithUrlDataContainerComponent ));
//
// export default ProfileContainer