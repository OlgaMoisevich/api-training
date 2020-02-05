import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let post = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

    return (
        <div>
            <h3>My Posts</h3>
            <div className={s.postsBlock}>
                <textarea name="" id="" cols="30" rows="5"></textarea><br/>
                <button>Add</button>
            </div>
            {post}
        </div>
    )
};
export default MyPosts