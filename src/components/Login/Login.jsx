import React from 'react'
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'
import {Redirect} from "react-router-dom";
import {required} from "../../utils/validators";
import {renderField} from "../common/FormControls/FormControls";

const LoginPageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.input_field}>
                <Field type="text" placeholder={"Login"} name={"login"} component={renderField} validate={[required]}  data={'input'}/>
            </div>
            <div className={s.input_field}>
                <Field type={"password"} placeholder={"Password"} name={"password"} component={renderField} validate={[required]} data={'input'}/>
            </div>
            <div className={s.input_field}>
                <Field type={"checkbox"} name={"remember_me"} component={renderField} validate={[required]} data={'input'} /> remember me
            </div>
            <div className={s.input_button}>
                <button>Login</button>
            </div>
        </form>
    )
};

const ContactForm = reduxForm({form: 'login'})(LoginPageForm);  //добавляем "redux-form" для использования с формами

const LoginPage = (props) => {
    const onSubmit = (props_data) => {
        return props.setLogin(props_data.login, props_data.password , props_data.input = false);
    };
    if (props.props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.wrapper}>
            <h2>Login</h2>
            <ContactForm onSubmit={onSubmit}/>
        </div>
    )
};

export default LoginPage