"use client";

import { redirect } from "next/navigation";

export function MessagesList() {
  const getMessageRedirect = (messageId) => () => redirect(`/messages/${messageId}`);

  return (
    <ul>
      <li onClick={getMessageRedirect(3)}>Message C</li>
      <li onClick={getMessageRedirect(2)}>Message B</li>
      <li onClick={getMessageRedirect(1)}>Message A</li>
    </ul>
  );
}
