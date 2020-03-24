import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {renderField} from "./../../common/FormControls/FormControls"
import {maxLength, required} from "../../../utils/validators";

const maxLength5 = maxLength(5);
const TextareaField = (props) => {
    return (
        <form className={s.postsBlock} onSubmit={props.handleSubmit}>
            <Field component={renderField}
                   name={"add_my_post_textarea"}
                   validate={[required, maxLength5]}
                   placeholder={'Введите текст'}
                   data={'textarea'}
            /><br/>
            <button className={s.button_add}>Add</button>
        </form>
    )
};

const TextareaForm = reduxForm({form: 'profile_textarea'})(TextareaField);

const MyPosts = (props) => {
    let post = props.postData.posts.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                      key={post.id}/>);

    let onAddPost = (data) => {
        debugger
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