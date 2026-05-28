import Link from 'next/link';
import { duas } from '@/lib/duas';

export const metadata = {
  title: 'Duas | Uns',
  description: 'Authentic duas with context and reflection.'
};

export default function DuasIndexPage() {
  return (
    <main className="container section">
      <h1>All Duas</h1>
      <div className="grid">
        {duas.map((dua) => (
          <article key={dua.slug} className="card">
            <h3>{dua.title}</h3>
            <p>{dua.category}</p>
            <Link href={`/duas/${dua.slug}`}>Open dua</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
