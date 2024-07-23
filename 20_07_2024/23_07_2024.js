import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    details: "",
  });
  const [errors, setErrors] = useState({
    names: false,
    email: false,
    details: false,
  });
  const SubmitEvent = (e) => {
    e.preventDefault;
    let isValid = true;
    //
    const user_name = formData.names;
    if (user_name.length < 1) {
      setErrors((prev) => ({ ...prev, names: true }));
      isValid = false;
    }

    //
    const user_email = formData.email;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user_email)) {
      setErrors((prev) => ({ ...prev, email: true }));
      isValid = false;
    }

    if (isValid) console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form action="">
      <span>{errors.names && "please enter name"}</span>
      <input type="text" onChange={handleChange} name="names" />

      <span>{errors.email && "please enter email"}</span>
      <input type="text" onChange={handleChange} name="email" />

      <input type="text" onChange={handleChange} name="details" />
      <button onClick={SubmitEvent} type="submit">
        SUBMIT
      </button>
    </form>
  );
}

export default Form;
