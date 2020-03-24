import React from "react";
import s from "./FormControls.module.css"


export const renderField = ({input, meta, ...props}) => {
    let span_error = undefined;
    const Element = props.data;
    let hasError = meta.error && meta.touched;
    if (hasError) {
        span_error = <span>{meta.error}</span>;
    } else {
        span_error = <span></span>;
    }
    return (
        <div className={hasError && s.wrapper_error}>
            {React.createElement(Element, {...input, ...props})} <br/>
            {span_error}
        </div>
    )
};