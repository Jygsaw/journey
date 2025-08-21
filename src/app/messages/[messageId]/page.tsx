import { Suspense } from "react";
import { getMessage } from "@/lib/dbUtils";
import { EditMessage } from "@/components/messages/EditMessage";

export default async function Page({ params }) {
  let { messageId } = await params;
  messageId = Number(messageId);
  const messagePromise = getMessage(messageId);

  return (
    <main>
      <Suspense fallback="Loading ...">
        <EditMessage messagePromise={messagePromise} />
      </Suspense>
    </main>
  );
}
