"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { updateMessage, deleteMessage } from "@/api/apiUtils";

interface InputProps {
  messagePromise: Promise<Message>;
}

export const EditMessage = ({ messagePromise }: InputProps) => {
  const router = useRouter();
  const message = use(messagePromise);
  const [content, setContent] = useState(message.content);

  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const handleSave = async () => {
    await updateMessage({
      ...message,
      content,
    });

    router.back();
  };
  const handleDelete = async () => {
    await deleteMessage(message.id);

    router.back();
  };

  return (
    <section>
      <textarea onChange={changeContent} value={content} placeholder="Your message for future travelers!" />
      <br />
      <button onClick={handleSave}>Save</button>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
};
