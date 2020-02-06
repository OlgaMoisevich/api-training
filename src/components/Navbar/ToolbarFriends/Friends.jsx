import React from 'react';
import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <div>
                <h1>Friends</h1>
            </div>
            <div className={s.avatars}>
                {
                    props.props.map(item => {
                            return <div className={s.friendsItem}>
                                <img className={s.ava} src={item.src} alt=""/>
                                <p>{item.name}</p>
                            </div>
                        }
                    )
                }
            </div>
        </div>
    )
};

export default Friends