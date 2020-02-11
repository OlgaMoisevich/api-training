import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {
    let el = React.createRef();

    let onPostChangeDialog = ()=>{
        props.props.updateNewPostText_1(el.current.value)
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem listItem={props.dialogData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.dialogData}/>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="5" ref={el}  onChange={onPostChangeDialog}/>
                <button>Add</button>
                <br/>
                <span>{props.props.state.profilePage.newPostTextDialog}</span>
            </div>
        </div>
    )
};

export default Dialogs