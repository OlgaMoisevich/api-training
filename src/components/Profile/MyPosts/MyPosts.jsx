import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    const postData = [
        {id: '1', message: 'Hi, how are you?', likesCount: 12},
        {id: '2', message: "It's my first post", likesCount: 11},
    ];

    let post = postData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

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