import React from "react";

export const required = value => (value ? undefined : 'Required');
export const maxLength = max => value => {
    console.log('----', value);
    return value && value.length > max ? `Must be ${max} characters or less` : undefined;
};



