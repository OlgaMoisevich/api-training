import React from 'react'
import s from './UsersProfil.module.css'

const UserProfile = (props)=>{
    let item = props.props
    console.log('8888', props)
    console.log('s', s)

    return( <div>
                <div className={s.wrapper}>
                    <div>
                        <span className={s.ava_wrapper}>
                            <img className={s.ava} src={item.photoUrl} alt=""/>
                        </span>
                    </div>
                    <div className={s.wrapper_block_about}>
                        <h1 className={s.full_name}>{item.fullName}</h1>
                        <div className={s.location}>
                            <h1>{item.location['city']}</h1>
                            <h1>{item.location['country']}</h1>
                        </div>
                    </div>
                </div>
            </div>
    )
};
export default UserProfile;