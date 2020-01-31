import React from 'react';
import s from './Post.module.css';

const Post = ()=>{
    return(
        <div className = {s.item}>
           <img src="https://st2.depositphotos.com/2181473/10280/v/950/depositphotos_102808196-stock-illustration-logo-hairstyle-card-for-beauty.jpg" alt=""/>
                post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;