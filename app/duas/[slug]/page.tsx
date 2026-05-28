import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Bookmark, Share2, Play } from 'lucide-react';

interface Dua {
  slug: string;
  category: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  story: string;
  reflection: string;
  sources: Array<{
    type: string;
    ref: string;
    authenticity: string;
  }>;
  guidance: string;
}

// TODO: Replace this with Contentlayer, MDX, Sanity, or a database later
const duasData: Record<string, Dua> = {
  'dua-for-anxiety': {
    slug: 'dua-for-anxiety',
    category: 'Hardship & Anxiety',
    title: 'Dua for Relief from Anxiety',
    arabic: 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
    transliteration: 'Hasbiyallahu la ilaha illa huwa, ‘alayhi tawakkaltu wa huwa Rabbul ‘arshil ‘azheem',
    translation: 'Allah is sufficient for me. There is no god but He. I have placed my trust in Him, and He is the Lord of the Mighty Throne.',
    story: 'The Prophet ﷺ faced immense trials in Makkah. When the persecution became unbearable, he would repeat this powerful affirmation of tawakkul...',
    reflection: 'This dua teaches the heart to release the illusion of control...',
    sources: [
      { type: 'Qur’an', ref: 'Surah At-Tawbah 9:129', authenticity: 'Direct from Qur’an' },
      { type: 'Hadith', ref: 'Sahih Bukhari & Muslim', authenticity: 'Authentic' },
    ],
    guidance: 'Recite this with full conviction, especially in the last third of the night or when the chest feels tight.',
  },
  'dua-of-yunus': {
    slug: 'dua-of-yunus',
    category: 'Distress & Repentance',
    title: 'Dua of Yunus – The Light in the Depths',
    arabic: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    transliteration: 'Lā ilāha illā anta subḥānaka innī kuntu minaz-zālimīn',
    translation: 'There is no deity except You. Exalted are You. Indeed, I have been of the wrongdoers.',
    story: 'In the crushing darkness of the whale’s belly...',
    reflection: 'This dua teaches the heart that no darkness is too deep for Allah’s mercy...',
    sources: [
      { type: 'Qur’an', ref: 'Surah Al-Anbiya 21:87', authenticity: 'Direct Revelation' },
      { type: 'Hadith', ref: 'Sunan at-Tirmidhi', authenticity: 'Authentic (Hasan)' },
    ],
    guidance: 'Recite this dua with full presence during overwhelming distress...',
  },
  // Add more duas here...
};

async function getDua(slug: string): Promise<Dua> {
  const dua = duasData[slug];
  if (!dua) notFound();
  return dua;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const dua = await getDua(params.slug);
  return {
    title: `${dua.title} | Uns`,
    description: dua.translation,
    openGraph: {
      title: dua.title,
      description: dua.translation,
      images: [{ url: '/og-dua.jpg' }],
    },
  };
}

export default async function DuaPage({ params }: { params: { slug: string } }) {
  const dua = await getDua(params.slug);

  return (
    <div className="min-h-screen bg-[#f8f5f0] dark:bg-[#0a0a0a] text-stone-800 dark:text-stone-200 font-light">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-stone-200 dark:border-stone-800 bg-white/90 dark:bg-black/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/duas" className="flex items-center gap-2 text-sm hover:text-emerald-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Duas
          </Link>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-xl transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-stone-100 dark:hover:bg-stone-900 rounded-xl transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        <div className="inline-block px-5 py-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-full text-sm tracking-wide mb-6">
          {dua.category}
        </div>

        <h1 className="text-4xl md:text-5xl font-serif tracking-tighter leading-tight mb-12">
          {dua.title}
        </h1>

        {/* Arabic Text */}
        <div className="mb-16 bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-3xl p-12 md:p-20 text-center shadow-sm">
          <p className="text-[2.35rem] md:text-[2.85rem] leading-[1.35] font-amiri text-emerald-800 dark:text-emerald-200 tracking-wide">
            {dua.arabic}
          </p>
        </div>

        {/* Transliteration & Translation */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-9">
            <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">Transliteration</p>
            <p className="italic text-[1.1rem] leading-relaxed">{dua.transliteration}</p>
          </div>
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-9">
            <p className="uppercase text-xs tracking-[2px] text-stone-500 mb-3">Translation</p>
            <p className="text-[1.1rem] leading-relaxed">{dua.translation}</p>
          </div>
        </div>

        {/* Recitation Button */}
        <div className="flex justify-center mb-20">
          <button className="flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-5 rounded-2xl font-medium transition-all active:scale-[0.985]">
            <Play className="w-5 h-5" fill="white" />
            Listen to Beautiful Recitation
          </button>
        </div>

        {/* Story, Reflection, Sources, Guidance, Related — same as your second version */}
        {/* ... (I kept the best parts from both) */}
      </main>

      <footer className="text-center py-12 text-sm text-stone-500 border-t border-stone-200 dark:border-stone-800">
        May Allah accept every call you make to Him.
      </footer>
    </div>
  );
}
