import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../common/FormControls/FormControls";
import {maxLength, required} from "../../utils/validators";


const maxLength5 = maxLength(7);

const DialogsForm = (props) => {
        return      <form onSubmit={props.handleSubmit}>
                        <Field name="dialogs_form_textarea"
                               value={props.dialogsData.newPostTextDialog}
                               placeholder='Enter your message'
                               component={renderField}
                               validate={[required, maxLength5]}
                               data={'textarea'}
                        /><br/>
                        <button>Add</button>
                     </form>
};

const TextareaForm = reduxForm({form: 'dialog_textarea'})(DialogsForm);

const Dialogs = (props) => {

    let onUpdateNewMessageBodyCreator = function (data) {
        props.updateNewMessageBodyCreator(data['dialogs_form_textarea']);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem listItem={props.dialogsData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.dialogsData}/>
                <p>{props.dialogsData.messageDialog}</p>
                <TextareaForm {...props} onSubmit={onUpdateNewMessageBodyCreator}/>
            </div>
        </div>
    )
};

export default Dialogs