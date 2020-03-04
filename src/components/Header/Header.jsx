import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    console.log('99', props)
    return (
        <header className={s.header}>
            <div>
                <div>
                    <img
                        src="https://f0.pngfuel.com/png/451/547/world-lanmarks-on-globe-clip-art-png-clip-art.png"
                        alt=""/>
                </div>
                <div className={s.header_content}>
                    <span className={s.text_login}>
                        {(props.login)?props.login:'Login'}
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header