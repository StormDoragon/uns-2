import Link from 'next/link';
import { notFound } from 'next/navigation';
import { duas } from '@/lib/duas';

export async function generateStaticParams() {
  return duas.map((dua) => ({ slug: dua.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dua = duas.find((d) => d.slug === slug);
  if (!dua) return {};
  return {
    title: `${dua.title} | Uns`,
    description: dua.translationReadable
  };
}

export default async function DuaPage({ params }) {
  const { slug } = await params;
  const dua = duas.find((d) => d.slug === slug);
  if (!dua) notFound();

  return (
    <main className="container section">
      <Link href="/duas">← Back to duas</Link>
      <h1>{dua.title}</h1>
      <p className="arabic">{dua.arabic}</p>
      <p><strong>Transliteration:</strong> {dua.transliteration}</p>
      <p><strong>Easy meaning:</strong> {dua.translationReadable}</p>

      <h2>The Moment Behind This Dua</h2>
      <p>{dua.storyContext}</p>

      <h2>What This Teaches the Heart</h2>
      <ul>{dua.heartLessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul>

      <h2>Sources & Authenticity</h2>
      <ul>{dua.sources.map((s) => <li key={s.reference}><strong>{s.type}:</strong> {s.reference} ({s.note})</li>)}</ul>

      <h2>When & How to Recite</h2>
      <p>{dua.recitationGuidance}</p>
    </main>
  );
}
