import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";


const TextareaField = (props) => {

    return (
        <form className={s.postsBlock} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={"add_my_post_textarea"} cols="60" rows="5"/><br/>
            <button className={s.button_add}>Add</button>
        </form>
    )
};

const TextareaForm = reduxForm({form: 'profile_textarea'})(TextareaField);

const MyPosts = (props) => {
    let post = props.postData.posts.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                      key={post.id}/>);

    let onAddPost = (data) => {
        props.addPost(data['add_my_post_textarea']);
    };

    return (
        <div>
            <h3 className={s.my_post}>My Posts</h3>
            <TextareaForm {...props} onSubmit={onAddPost}/>
            <div className={s.post}>{post}</div>
        </div>
    )
};

export default MyPosts