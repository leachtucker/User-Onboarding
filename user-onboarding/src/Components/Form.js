import React from 'react';

export default function Form(props) {
    const {
        formValues,
        formErrors,
        disabled
    } = props;

    return (
        <form className="form-container">
            <div>
                <h2>Sign Up</h2>
                <button disabled={false}>Submit</button>
                <div className="error-container">
                    <div>{formErrors.name}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.password}</div>
                    <div>{formErrors.tos}</div>
                </div>
            </div>
        </form>
    );
}