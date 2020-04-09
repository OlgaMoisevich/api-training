import React, {useState} from 'react'


const ProfileStatusWithHooks = (props) => {
    console.log('PROPS_PROFILE', props);

    let [editMode, setEditMode] = useState(false);      // исп. Хуки как локальный стейт компоненты
    let [status, setStatus] = useState(props.data_status_after_update);

    let activateEditMode = () => {
        return setEditMode(true);
    };
    let deactivateEditMode = () => {
        return setEditMode(false);
    };

    // let fillingInput = async (e) => {
    let fillingInput = (e) => {
        let val = e.target.value;
        // await setStatus(val);        //  исп. async await, тк функция this.setStatus асинхронная
        setStatus(val);
        props.update(val);
    };


    return (
        <div>
            {!editMode &&
            <div onDoubleClick={activateEditMode}>
                <span>{props.data_status_after_update || 'BY'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus onChange={fillingInput} onBlur={deactivateEditMode} type="text"
                       value={status}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks

