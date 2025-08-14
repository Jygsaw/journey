'use client';

import { redirect } from 'next/navigation';

export function LoginForm() {
  const clickHandler = () => redirect('/dashboard');

  return (
    <button onClick={clickHandler}>Log In</button>
  );
}
