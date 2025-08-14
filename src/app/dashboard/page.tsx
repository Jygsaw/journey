import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <ul>
        <li><Link href="/places">Places</Link></li>
        <li><Link href="/journeys">Journeys</Link></li>
      </ul>
    </section>
  );
}
