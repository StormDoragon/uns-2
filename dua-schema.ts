export type SourceType = 'QURAN' | 'HADITH';
export type HadithGrade = 'SAHIH' | 'HASAN' | 'DAIF' | 'DISPUTED' | 'NOT_APPLICABLE';
export type Certainty = 'CERTAIN' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface SourceRef {
  type: SourceType;
  reference: string; // e.g., "Al-Anbiya 21:87" or "Sahih Muslim 2702"
  grade: HadithGrade;
  certainty: Certainty;
  note?: string; // short explanatory note (no speculation)
}

export interface DuaEntry {
  id: string;
  slug: string;
  title: string;
  category: string;
  arabic: string;
  transliteration: string;
  translationLiteral: string;
  translationReadable: string;
  storyContext: string; // historically grounded, no fabrication
  heartLessons: string[];
  recitationGuidance: string;
  sources: SourceRef[];
  reflection: string; // explicitly reflection, not revelation
  tags: string[];
}

export function validateDuaEntry(dua: DuaEntry): string[] {
  const errors: string[] = [];

  if (!dua.slug) errors.push('Missing slug.');
  if (!dua.arabic) errors.push('Missing Arabic text.');
  if (!dua.translationLiteral) errors.push('Missing literal translation.');
  if (!dua.translationReadable) errors.push('Missing readable translation.');

  if (!dua.sources.length) {
    errors.push('At least one source is required.');
  }

  for (const source of dua.sources) {
    if (source.type === 'QURAN' && source.grade !== 'NOT_APPLICABLE') {
      errors.push(`Qur\'an source "${source.reference}" must use grade NOT_APPLICABLE.`);
    }
    if (source.type === 'HADITH' && source.grade === 'NOT_APPLICABLE') {
      errors.push(`Hadith source "${source.reference}" must include a hadith grade.`);
    }
  }

  if (/guaranteed|instant|secret|hack/i.test(dua.reflection + ' ' + dua.recitationGuidance)) {
    errors.push('Contains manipulative/spiritual-shortcut language.');
  }

  return errors;
}

export const sampleDuaYunus: DuaEntry = {
  id: 'dua-yunus-001',
  slug: 'dua-of-yunus',
  title: 'Dua of Yunus عليه السلام',
  category: 'Hardship & Repentance',
  arabic: 'لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
  transliteration: 'La ilaha illa Anta, subhanaka inni kuntu minaz-zalimin',
  translationLiteral: 'There is no deity except You. Glory be to You. Indeed, I was among the wrongdoers.',
  translationReadable: 'My Lord, there is no god but You. You are perfect, and I have wronged myself.',
  storyContext: 'Qur\'an 21:87 records this supplication of Yunus عليه السلام in severe distress, combining tawhid, glorification, and accountability.',
  heartLessons: [
    'Accountability can coexist with hope.',
    'Tawhid anchors the heart before relief arrives.',
    'Returning to Allah begins with honesty.'
  ],
  recitationGuidance: 'Recite with presence in hardship, especially in sujood and private moments, focusing on sincerity over repetition counts.',
  sources: [
    {
      type: 'QURAN',
      reference: 'Al-Anbiya 21:87-88',
      grade: 'NOT_APPLICABLE',
      certainty: 'CERTAIN',
      note: 'Primary revealed source.'
    }
  ],
  reflection: 'This dua teaches the heart to turn to Allah with humility and hope, even after personal mistakes.',
  tags: ['hardship', 'repentance', 'tawhid', 'hope']
};
