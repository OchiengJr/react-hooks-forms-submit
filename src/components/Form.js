import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    setErrors([]);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
    setErrors([]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = [];
    if (!firstName) {
      newErrors.push("First name is required!");
    }
    if (!lastName) {
      newErrors.push("Last name is required!");
    }
    if (newErrors.length === 0) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
      };
      setSubmittedData([...submittedData, formData]);
      setFirstName("");
      setLastName("");
    } else {
      setErrors(newErrors);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={handleFirstNameChange}
          value={firstName}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={handleLastNameChange}
          value={lastName}
        />
        <button type="submit" disabled={errors.length > 0}>
          Submit
        </button>
      </form>
      {errors.length > 0 && (
        <div style={{ color: "red" }}>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
