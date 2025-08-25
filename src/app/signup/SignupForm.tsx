"use client";

import { useState } from "react";
import { createUser } from "@/api/apiUtils";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    await createUser({ name, email });
  };

  return (
    <section>
      <input type="text" onChange={changeName} value={name} placeholder="Full Name" />
      <br />
      <input type="text" onChange={changeEmail} value={email} placeholder="Email" />
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </section>
  );
};
