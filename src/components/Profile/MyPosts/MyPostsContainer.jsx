import React from 'react';
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    // let postData = props.store.postData.state.profilePage;
    //
    // let onAddPost = () => {
    //     props.store.postData.dispatch(addPostActionCreator())
    // };
    //
    // let onPostChange = (text) => {
    //     props.store.postData.dispatch(updateNewTextActionCreator(text));
    // };

    return <StoreContext.Consumer>
        {(value) => {
            let postData = value.getState().profilePage;
            let onAddPost = () => {
                value.dispatch(addPostActionCreator())
            };

            let onPostChange = (text) => {
                value.dispatch(updateNewTextActionCreator(text));
            };
            return <MyPosts addPost={onAddPost} updateNewPostText={onPostChange} postData={postData}/>
        }
        }
    </StoreContext.Consumer>
};


export default MyPostsContainer