import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

import schema from './Validation/formSchema'
import Form from './Components/Form';
import Users from './Components/Users';
import './App.css';

// Initial state
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  // Checkbox
  tos: false
}

const initialButtonDisabled = true;

const initialUsers = [];

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  tos: "",
}

function App() {
  // Slices of state
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [buttonDisabled, setButtonDisabled] = useState(initialButtonDisabled);

  // HELPERS
  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
        .validate(value)
          .then(valid => {
            setFormErrors({...formErrors, [name]: ""});
          })
          .catch(err => {
            setFormErrors({...formErrors, [name]:err.errors[0]});
          })
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value});
  }

  const formSubmit = () => {
    const user = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }

    // Post new user to server
    postNewUser(user);
  }

  // Runs on first render of App()
  useEffect(() => {

  }, []);

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setButtonDisabled(!valid);
      })
  }, [formValues]);

  return (
    <div className="App">
      <header>
        <h1>User Onboarding</h1>
      </header>
      <Form formValues={formValues} formErrors={formErrors} disabled={buttonDisabled} change={inputChange} submit={formSubmit} />
      <Users users={users} />
    </div>
  );
}

export default App;
