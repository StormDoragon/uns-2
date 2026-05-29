import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Bookmark, Play, Share2 } from 'lucide-react';

interface DuaSource {
  type: 'Qur’an' | 'Hadith';
  ref: string;
  note: string;
}

interface Dua {
  slug: string;
  category: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  story: string;
  reflection: string;
  guidance: string;
  sources: DuaSource[];
}

const duasData: Record<string, Dua> = {
  'dua-of-yunus': {
    slug: 'dua-of-yunus',
    category: 'Distress & Repentance',
    title: 'Dua of Yunus — Light in the Depths',
    arabic: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    transliteration: 'Lā ilāha illā anta subḥānaka innī kuntu minaẓ-ẓālimīn',
    translation: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
    story:
      'Yunus عليه السلام called upon Allah from a place no person could reach him. The dua brings together tawḥīd, Allah’s perfection, and an honest admission of need.',
    reflection:
      'When the heart feels surrounded, this dua teaches that no darkness is too deep for Allah’s knowledge and mercy.',
    guidance:
      'Recite it slowly when distress rises. Pause after each phrase: affirm Allah alone, glorify Him, then return with humility.',
    sources: [{ type: 'Qur’an', ref: 'Surah Al-Anbiya 21:87', note: 'Direct Qur’anic dua' }],
  },
  'dua-of-ayyub': {
    slug: 'dua-of-ayyub',
    category: 'Illness & Hardship',
    title: 'Dua of Ayyub — Mercy When Harm Touches You',
    arabic: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ',
    transliteration: 'Annī massaniyaḍ-ḍurru wa anta arḥamur-rāḥimīn',
    translation: 'Harm has touched me, and You are the Most Merciful of the merciful.',
    story:
      'Ayyub عليه السلام endured prolonged trial and turned to Allah with few words, naming his pain while holding fast to Allah’s mercy.',
    reflection:
      'The dua is not denial. It is pain placed in the safest possible place: before the Most Merciful.',
    guidance:
      'Use it in sickness, grief, fatigue, or emotional heaviness. Let the final words remind you that Allah’s mercy is greater than the trial.',
    sources: [{ type: 'Qur’an', ref: 'Surah Al-Anbiya 21:83', note: 'Direct Qur’anic dua' }],
  },
  'dua-of-musa-for-need': {
    slug: 'dua-of-musa-for-need',
    category: 'Rizq & Need',
    title: 'Dua of Musa — In Need of Good',
    arabic: 'رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
    transliteration: 'Rabbi innī limā anzalta ilayya min khayrin faqīr',
    translation: 'My Lord, I am in need of whatever good You send down to me.',
    story:
      'Musa عليه السلام made this dua after leaving danger behind, helping others, and arriving with no worldly support except Allah.',
    reflection:
      'It teaches a clean kind of asking: not demanding a specific door, but asking Allah for the good He knows you need.',
    guidance:
      'Recite it when looking for work, stability, marriage, shelter, direction, or any provision that must come from Allah.',
    sources: [{ type: 'Qur’an', ref: 'Surah Al-Qasas 28:24', note: 'Direct Qur’anic dua' }],
  },
  'hasbunallahu-wa-nimal-wakeel': {
    slug: 'hasbunallahu-wa-nimal-wakeel',
    category: 'Trust & Courage',
    title: 'Allah Is Sufficient for Us',
    arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    transliteration: 'Ḥasbunallāhu wa ni‘mal-wakīl',
    translation: 'Allah is sufficient for us, and He is the best disposer of affairs.',
    story:
      'The Qur’an records these words as the response of believers when fear was intensified against them.',
    reflection:
      'It is a sentence of courage: your means may be small, but the One entrusted with your affair is not.',
    guidance:
      'Say it when anxiety turns toward outcomes you cannot control. Then take the next lawful step available to you.',
    sources: [{ type: 'Qur’an', ref: 'Surah Aal-Imran 3:173', note: 'Qur’anic remembrance' }],
  },
  'wa-ufawwidu-amri-ilallah': {
    slug: 'wa-ufawwidu-amri-ilallah',
    category: 'Surrender',
    title: 'I Entrust My Affair to Allah',
    arabic: 'وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ ۚ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ',
    transliteration: 'Wa ufawwiḍu amrī ilallāh; innallāha baṣīrun bil-‘ibād',
    translation: 'I entrust my affair to Allah. Indeed, Allah sees His servants.',
    story:
      'These words are spoken in the Qur’an by a believing man who stood for truth while surrounded by pressure.',
    reflection:
      'Surrender is not passivity. It is moving with the knowledge that Allah sees every hidden pressure and every sincere intention.',
    guidance:
      'Recite it before difficult conversations, decisions, or moments when you fear being misunderstood.',
    sources: [{ type: 'Qur’an', ref: 'Surah Ghafir 40:44', note: 'Qur’anic statement of surrender' }],
  },
};

function getDua(slug: string): Dua {
  const dua = duasData[slug];

  if (!dua) {
    notFound();
  }

  return dua;
}

export function generateStaticParams() {
  return Object.keys(duasData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dua = getDua(params.slug);

  return {
    title: `${dua.title} | Uns`,
    description: dua.translation,
    openGraph: {
      title: dua.title,
      description: dua.translation,
      type: 'article',
      images: [{ url: '/og-dua.jpg' }],
    },
  };
}

export default function DuaPage({ params }: { params: { slug: string } }) {
  const dua = getDua(params.slug);

  return (
    <div className="min-h-screen bg-[#f8f1e7] text-stone-800 dark:bg-[#0a0f0d] dark:text-stone-100">
      <nav className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md dark:border-stone-800 dark:bg-black/85">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/duas" className="flex items-center gap-2 text-sm transition-colors hover:text-emerald-700">
            <ArrowLeft className="h-4 w-4" />
            All Duas
          </Link>
          <div className="flex gap-3" aria-label="Dua actions">
            <button type="button" className="rounded-xl p-2 transition-colors hover:bg-stone-100 dark:hover:bg-stone-900" aria-label="Bookmark this dua">
              <Bookmark className="h-5 w-5" />
            </button>
            <button type="button" className="rounded-xl p-2 transition-colors hover:bg-stone-100 dark:hover:bg-stone-900" aria-label="Share this dua">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-12">
        <p className="mb-6 inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm tracking-wide text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          {dua.category}
        </p>

        <h1 className="mb-10 font-serif text-4xl leading-tight tracking-tight md:text-5xl">{dua.title}</h1>

        <section className="mb-12 rounded-3xl border border-stone-100 bg-white p-10 text-center shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-16" aria-label="Arabic dua">
          <p className="font-amiri text-[2.35rem] leading-[1.55] tracking-wide text-emerald-800 dark:text-emerald-200" lang="ar" dir="rtl">
            {dua.arabic}
          </p>
        </section>

        <section className="mb-12 grid gap-6 md:grid-cols-2" aria-label="Dua meaning">
          <div className="rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-900">
            <p className="mb-3 text-xs uppercase tracking-[2px] text-stone-500">Transliteration</p>
            <p className="text-[1.05rem] italic leading-relaxed">{dua.transliteration}</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-900">
            <p className="mb-3 text-xs uppercase tracking-[2px] text-stone-500">Translation</p>
            <p className="text-[1.05rem] leading-relaxed">{dua.translation}</p>
          </div>
        </section>

        <div className="mb-14 flex justify-center">
          <button type="button" className="flex items-center gap-3 rounded-2xl bg-emerald-700 px-8 py-4 font-medium text-white transition-all hover:bg-emerald-800 active:scale-[0.985]">
            <Play className="h-5 w-5" fill="white" />
            Listen to recitation
          </button>
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="mb-3 font-serif text-2xl">Context</h2>
            <p className="leading-8 text-stone-700 dark:text-stone-300">{dua.story}</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-2xl">Reflection</h2>
            <p className="leading-8 text-stone-700 dark:text-stone-300">{dua.reflection}</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-2xl">How to sit with it</h2>
            <p className="leading-8 text-stone-700 dark:text-stone-300">{dua.guidance}</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/40">
            <h2 className="mb-4 font-serif text-2xl">Sources</h2>
            <ul className="space-y-3">
              {dua.sources.map((source) => (
                <li key={`${source.type}-${source.ref}`} className="leading-7">
                  <strong>{source.type}:</strong> {source.ref} <span className="text-stone-600 dark:text-stone-400">— {source.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-12 text-center text-sm text-stone-500 dark:border-stone-800">
        May Allah accept every call you make to Him.
      </footer>
    </div>
  );
}
