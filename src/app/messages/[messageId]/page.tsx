import { Suspense } from "react";
import { getMessage } from "@/api/apiUtils";
import { EditMessage } from "@/components/messages/EditMessage";

export default async function Page({ params }) {
  const { messageId } = await params;
  const messagePromise = getMessage(messageId);

  return (
    <main>
      <Suspense fallback="Loading ...">
        <EditMessage messagePromise={messagePromise} />
      </Suspense>
    </main>
  );
}
