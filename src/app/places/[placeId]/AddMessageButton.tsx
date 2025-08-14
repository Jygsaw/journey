'use client';

import { redirect } from 'next/navigation';

export function AddMessageButton() {
  const clickHandler = () => redirect('/messages/4');
  return <button onClick={clickHandler}>+ Message</button>;
}
