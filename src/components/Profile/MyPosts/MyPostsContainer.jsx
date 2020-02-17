import React from 'react';
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let postData = props.store.postData.state.profilePage;
    // let postData = props.store.postData.state.getState().profilePage.posts;

    let onAddPost = () => {
        props.store.postData.dispatch(addPostActionCreator())
    };

    let onPostChange = (text) => {
        props.store.postData.dispatch(updateNewTextActionCreator(text));
    };

    return <MyPosts addPost={onAddPost} updateNewPostText={onPostChange} postData={postData}/>
};


export default MyPostsContainer