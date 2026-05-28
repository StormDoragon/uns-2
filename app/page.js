import Link from 'next/link';
import { duas } from '@/lib/duas';

export default function HomePage() {
  const featured = duas.slice(0, 6);
  return (
    <main className="container">
      <header className="hero">
        <p className="eyebrow">Authentic duas for real life</p>
        <h1>A resting place for tired hearts.</h1>
        <p className="lead">Hardship, illness, surrender, protection, tawakkul, rizq, emotional overwhelm, fear, relief, and divine mercy.</p>
        <Link className="button" href="/duas">Begin with a Dua</Link>
      </header>

      <section className="section">
        <h2>Featured duas</h2>
        <div className="grid">
          {featured.map((dua) => (
            <article key={dua.slug} className="card">
              <h3>{dua.title}</h3>
              <p className="arabic">{dua.arabic}</p>
              <p>{dua.translationReadable}</p>
              <Link href={`/duas/${dua.slug}`}>Read full entry →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
