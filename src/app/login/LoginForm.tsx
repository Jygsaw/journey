"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/lib/authUtils";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    const success = await authenticate(email);

    if (success) {
      router.push("/dashboard");
    } else {
      // TODO: handle failed login
    }
  };

  return (
    <section>
      <input type="text" onChange={changeEmail} value={email} placeholder="Email" />
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </section>
  );
};
