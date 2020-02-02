import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ()=>{
    return (
        <div>
            <h3>My Posts</h3>
            <div className={s.postsBlock}>
                <textarea name="" id="" cols="30" rows="5"></textarea><br/>
                <button>Add</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    )
}
export default MyPosts