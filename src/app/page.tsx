import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Home Page</h1>
      <br />
      <Link href="/login">Click here to log in</Link>
    </main>
  );
}
