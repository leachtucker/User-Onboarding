import React, { useState, useEffect } from 'react';
import Form from './Components/Form.js';

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
  tos: ""
}

const mockData = [{name: "John Doe", email: "john@john.com", password: "jOhN"}, {name: "Alice Doe", email: "alice@alice.com", password: "Alice"}, {name: "Jane Doe", email: "jane@jane.com", password: "Jane"}, {name: "Max Doe", email: "max@max.com", password: "Max"}];

function App() {
  // Slices of state
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [buttonDisabled, setButtonDisabled] = useState(initialButtonDisabled);

  const inputChange = (name, value) => {
    // REMINDER: VALIDATE
    setFormValues({ ...formValues, [name]: value});
  }

  const formSubmit = () => {
    const user = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }

    console.log(user);
  }

  // Runs on first render of App()
  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <header>
        <h1>User Onboarding</h1>
      </header>
      <body>

        <Form formValues={formValues} formErrors={formErrors} disabled={buttonDisabled} change={inputChange} submit={formSubmit} />
        <Users users={users} />
      </body>
    </div>
  );
}

export default App;
