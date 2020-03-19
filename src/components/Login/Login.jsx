import React from 'react'
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'
import {setLogin} from "../../redux/auth-reducer";
import {connect} from "react-redux";


const LoginPageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className={s.input_field}>
                <Field type="text" placeholder={"Login"} name={"login"} component="input"/>
            </div>
            <div className={s.input_field}>
                <Field type="password" placeholder={"Password"} name={"password"} component="input"/>
            </div>
            <div className={s.input_field}>
                <Field type="checkbox" name={"remember_me"} component="input" /> remember me
            </div>
            <div className={s.input_button}>
                <button>Login</button>
            </div>
        </form>
    )
};

const ContactForm = reduxForm({form: 'login'})(LoginPageForm);

const LoginPage = (props) => {
    debugger

    const onSubmit = (props_data) => {
        props.setLogin(props_data.login, props_data.password = '12345', props_data.input = false);
    };

    return (
        <div className={s.wrapper}>
            <h2>Login</h2>
            <ContactForm onSubmit={onSubmit}/>
        </div>
    )
};

// export default connect(null, {setLogin})(LoginPage);
export default LoginPage