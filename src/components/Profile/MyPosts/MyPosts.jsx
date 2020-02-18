import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    console.log('PROPS__', props)
    let post = props.postData.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    };

    return (
        <div>
            <h3>My Posts</h3>
            <div className={s.postsBlock}>
                <textarea name="" id="" cols="30" rows="5" value={props.postData.newPostText} onChange={onPostChange}/><br/>
                <button onClick={onAddPost}>Add</button>
            </div>
            {post}
        </div>
    )
};
export default MyPosts