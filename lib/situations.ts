export interface Situation {
  slug: string
  label: string
  cardLabel: string
  description: string
  intro: string
  duaSlugs: string[]
}

export const situationsData: Record<string, Situation> = {
  anxiety: {
    slug: 'anxiety',
    label: 'Anxiety & Worry',
    cardLabel: 'I am anxious',
    description: 'Duas for when the mind will not settle and the chest feels tight.',
    intro:
      'Anxiety is the heart carrying what only Allah was meant to hold. These duas bring the chest back to stillness — not by removing difficulty, but by relocating it in the hands of the One who controls all of it.',
    duaSlugs: [
      'dua-for-anxiety',
      'dua-of-yunus',
      'dua-for-protection',
      'la-hawla-wa-la-quwwata',
      'allahu-akbar',
    ],
  },
  hardship: {
    slug: 'hardship',
    label: 'Hardship & Struggle',
    cardLabel: 'I am struggling',
    description: 'Duas for difficult seasons when effort feels like it is not enough.',
    intro:
      'Hardship is not a sign that Allah has abandoned you. Some of the most beloved people to Allah passed through the longest, darkest trials. These duas are what they said in those moments.',
    duaSlugs: [
      'dua-of-ayyub',
      'dua-for-relief',
      'la-hawla-wa-la-quwwata',
      'dua-of-yunus',
      'dua-for-anxiety',
    ],
  },
  forgiveness: {
    slug: 'forgiveness',
    label: 'Repentance & Forgiveness',
    cardLabel: 'I need forgiveness',
    description: 'Duas for returning to Allah after falling short.',
    intro:
      'The door of tawbah does not close. Allah is Al-Ghaffar — the repeatedly, abundantly forgiving — and these duas are a path back to Him, no matter how far you feel you have drifted.',
    duaSlugs: [
      'dua-of-yunus',
      'astaghfirullah',
      'kalima-astaghfar',
      'kalima-radde-kufr',
    ],
  },
  gratitude: {
    slug: 'gratitude',
    label: 'Gratitude',
    cardLabel: 'I feel grateful',
    description: 'Duas and dhikr for when the heart wants to return praise to Allah.',
    intro:
      'Gratitude in Islam is not a feeling — it is an act. These words channel a grateful heart toward its source, and teach it to see blessings even in moments that feel ordinary.',
    duaSlugs: [
      'alhamdulillah',
      'tahlil-complete',
      'subhanallahi-wa-bihamdihi-subhanallahil-adheem',
      'subhanallah',
    ],
  },
  protection: {
    slug: 'protection',
    label: 'Protection & Fear',
    cardLabel: 'I need protection',
    description: 'Duas for when you face a threat and need Allah to be your shield.',
    intro:
      'When fear arrives — of people, of the future, of loss — these duas return the heart to the only One who can truly protect. They were spoken in the face of fire and armies.',
    duaSlugs: [
      'dua-for-protection',
      'dua-for-anxiety',
      'kalima-radde-kufr',
      'allahu-akbar',
    ],
  },
  illness: {
    slug: 'illness',
    label: 'Illness & Healing',
    cardLabel: 'I am sick',
    description: 'Duas for illness, pain, and the longing for healing.',
    intro:
      'Illness strips away many things, but it often strips away distraction too — leaving the heart bare before its Lord. These duas come from those who waited, suffered, and were answered.',
    duaSlugs: [
      'dua-of-ayyub',
      'dua-for-relief',
      'dua-for-anxiety',
    ],
  },
  guidance: {
    slug: 'guidance',
    label: 'Guidance & Clarity',
    cardLabel: 'I need guidance',
    description: 'Duas for moments of confusion, decision, and seeking direction.',
    intro:
      'When the road is unclear and decisions feel heavy, these duas return the matter to Allah — the One who sees all paths, all outcomes, and all that is hidden from you.',
    duaSlugs: [
      'dua-of-ibrahim',
      'tahlil-complete',
      'la-ilaha-illallah',
      'dua-for-anxiety',
    ],
  },
  tawakkul: {
    slug: 'tawakkul',
    label: 'Tawakkul & Surrender',
    cardLabel: 'I want to surrender',
    description: 'Duas for releasing what you cannot control and trusting Allah completely.',
    intro:
      'Tawakkul is not passivity — it is the honest recognition that Allah sees more than you do. These duas are acts of letting go, not giving up.',
    duaSlugs: [
      'dua-of-ibrahim',
      'dua-for-anxiety',
      'dua-for-protection',
      'la-hawla-wa-la-quwwata',
    ],
  },
  closeness: {
    slug: 'closeness',
    label: 'Closeness to Allah',
    cardLabel: 'I want closeness to Allah',
    description: 'Duas and dhikr for when your heart is seeking nearness to Allah.',
    intro:
      'The heart was made for Allah and is restless until it rests in Him. These words are a doorway back — from the ordinary moment, from wherever you are, to His presence.',
    duaSlugs: [
      'la-ilaha-illallah',
      'tahlil-complete',
      'subhanallah',
      'alhamdulillah',
      'allahu-akbar',
    ],
  },
}

export const allSituations: Situation[] = Object.values(situationsData)

export function getSituation(slug: string): Situation | null {
  return situationsData[slug] ?? null
}
