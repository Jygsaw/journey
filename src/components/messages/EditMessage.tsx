"use client";

import { use, useState } from "react";
import { updateMessage } from "@/lib/dbUtils";
import { UserContext } from "@/contexts/UserContext";

interface InputProps {
  messagePromise: Promise<Message>;
}

export const EditMessage = ({ messagePromise }) => {
  const user = use(UserContext);
  const message = use(messagePromise);
  const [content, setContent] = useState(message.content);

  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const save = async () => {
    await updateMessage({
      ...message,
      content,
    });
  };

  return (
    <section>
      <textarea value={content} onChange={changeContent} />
      <br />
      <button onClick={save}>Save</button>
    </section>
  );
};
