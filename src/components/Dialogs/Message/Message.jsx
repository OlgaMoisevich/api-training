import React from 'react'
import s from './../Dialogs.module.css'

const Message = (props) => {
    return props.messageData.messageData.map(item => {
        return <div className={s.dialog} key={item.id}>
            {item.message}
        </div>
    });
};

export default Message;