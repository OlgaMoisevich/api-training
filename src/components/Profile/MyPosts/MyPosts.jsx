import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {reduxForm} from "redux-form";


const TextareaField = (props) => {

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    };

    return (
        <form className={s.postsBlock}>
            <textarea name="" id="" cols="60" rows="5" value={props.postData.newPostText} onChange={onPostChange}/><br/>
        </form>
    )
};


const TextareaForm = reduxForm({form: 'profile_textarea'})(TextareaField);

const MyPosts = (props) => {
    let onAddPost = () => {
        props.addPost()
    };

    let post = props.postData.posts.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                      key={post.id}/>);

    // let onAddPost = () => {
    //     props.addPost()
    // };
    //
    // let onPostChange = (e) => {
    //     let text = e.target.value;
    //     props.updateNewPostText(text)
    // };

    return (
        <div>
            <h3 className={s.my_post}>My Posts</h3>
            <TextareaForm {...props}/>
            <button onClick={onAddPost} className={s.button_add}>Add</button>
            <div className={s.post}>{post}</div>
        </div>
    )
};
export default MyPosts