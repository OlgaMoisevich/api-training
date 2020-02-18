import React from "react";
import {connect} from "react-redux";
import Friends from "./components/Navbar/ToolbarFriends/Friends";

let mapStateToProps = (state)=>{
    return {
        props: state.navbarPag.toolbarFriehds,
    }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer
