import React, { useState, useEffect } from 'react';
import Form from './Components/Form.js';
import './App.css';

// Initial state
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  // Checkbox
  tos: false
}

const initialButtonDisabled = true

const initialUsers = [];

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  tos: ""
}

function App() {
  // Slices of state
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [buttonDisabled, setButtonDisabled] = useState(initialButtonDisabled);

  return (
    <div className="App">
      <header>
        <h1>User Onboarding</h1>
      </header>
      <body>
        <Form formValues={formValues} formErrors={formErrors} buttonDisabled={buttonDisabled} />
      </body>
    </div>
  );
}

export default App;
