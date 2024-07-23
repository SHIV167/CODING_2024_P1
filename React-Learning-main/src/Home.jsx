import React, { useState } from "react";

function Home() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    details: "",
  });
  const SubmitEvent = () => {
    //e.preventDefault;
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form action="">
      <input type="text" onChange={handleChange} name="names" />
      <input type="text" name="email" />
      <input type="text" name="details" />
      <button onClick={SubmitEvent} type="submit">
        SUBMIT
      </button>
    </form>
  );
}

export default Home;
