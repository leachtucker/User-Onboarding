import React from 'react';

export default function Form(props) {
    const {
        formValues,
        formErrors,
        disabled,
        change,
        submit
    } = props;

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className="form-container">
            <div>
                <h2>Sign Up</h2>
                <div className="error-container">
                    <div>{formErrors.name}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.password}</div>
                    <div>{formErrors.tos}</div>
                </div>
                <div className="input-container">
                    <label>
                        Name:<br />
                        <input type="text" name="name" value={formValues.name} onChange={onChange} />
                    </label>
                    <label>
                        Email:<br />
                        <input type="email" name="email" value={formValues.email} onChange={onChange} />
                    </label>
                    <label>
                        Password:<br />
                        <input type="password" name="password" value={formValues.password} onChange={onChange} />
                    </label>
                    <label>
                        I <em>agree</em> to the terms of service:<br />
                        <input type="checkbox" name="tos" value={formValues.tos} onChange={onChange} />
                    </label>
                </div>
                <button disabled={disabled} onClick={onSubmit}>Submit</button>
            </div>
        </form>
    );
}