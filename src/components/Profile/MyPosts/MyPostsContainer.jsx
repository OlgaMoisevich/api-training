import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//     // let postData = props.store.postData.state.profilePage;
//     //
//     // let onAddPost = () => {
//     //     props.store.postData.dispatch(addPostActionCreator())
//     // };
//     //
//     // let onPostChange = (text) => {
//     //     props.store.postData.dispatch(updateNewTextActionCreator(text));
//     // };
//
//     return <StoreContext.Consumer>
//         {(value) => {
//             let postData = value.getState().profilePage;
//             let onAddPost = () => {
//                 value.dispatch(addPostActionCreator())
//             };
//
//             let onPostChange = (text) => {
//                 value.dispatch(updateNewTextActionCreator(text));
//             };
//             return <MyPosts addPost={onAddPost} updateNewPostText={onPostChange} postData={postData}/>
//         }
//         }
//     </StoreContext.Consumer>
// };
let mapStateToProps = (store) => {
    return {
        postData: store.profilePage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer