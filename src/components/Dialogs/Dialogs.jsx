import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Василий
                </div>
                <div className={s.dialog}>
                    Генадий
                </div>
                <div className={s.dialog}>
                    Алексей
                </div>
                <div className={s.dialog}>
                    Влада
                </div>
                <div className={s.dialog}>
                    Виктория
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>Yoi</div>
            </div>
        </div>
    )
}

export default Dialogs