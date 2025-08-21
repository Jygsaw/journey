"use client";

import { use } from "react";
import Link from "next/link";

interface InputProps {
  messagesPromise: Promise<Message[]>;
}

export const MessagesList = ({ messagesPromise }: InputProps) => {
  const messages = use(messagesPromise);

  return (
    <ul>
      {messages.map(({ id, content }) =>
        <li key={id}><Link href={`/messages/${id}`}>{content}</Link></li>
      )}
    </ul>
  );
};
