import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    debugger
    let el = React.createRef();
    // getElement.current.value;

// window.text = el
    let fff = props.props.updateNewPostText
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem listItem={props.dialogData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.dialogData}/>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="5" ref={el} onChange={props.props.updateNewPostText}/>
                <button>Add</button>
            </div>
        </div>
    )
};

export default Dialogs