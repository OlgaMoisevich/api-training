import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let post = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

    let newPostElement = React.createRef();
    let addPost = ()=>{
        props.postFunc.dispatch({type:'ADD-POST'})
    };

    let onPostChange=()=>{
        props.postFunc.dispatch({type:'UPDATE-NEW-POST-TEXT', 'newText': newPostElement.current.value});
    };

    return (
        <div>
            <h3>My Posts</h3>
            <div className={s.postsBlock}>
                <textarea name="" id="" cols="30" rows="5"  ref={newPostElement} value={props.newPostText} onChange={onPostChange}/><br/>
                <button onClick={addPost}>Add</button>
            </div>
            {post}
        </div>
    )
};
export default MyPosts