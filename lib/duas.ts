export interface DuaSource {
  type: string
  ref: string
  authenticity: string
}

export interface Dua {
  slug: string
  category: string
  title: string
  arabic: string
  transliteration: string
  translation: string
  story: string
  reflection: string
  sources: DuaSource[]
  guidance: string
}

export const duasData: Record<string, Dua> = {
  'dua-of-ayyub': {
    slug: 'dua-of-ayyub',
    category: 'Illness & Suffering',
    title: 'Dua of Ayyub — When Pain Is All You Know',
    arabic: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
    transliteration: "Annī massaniya al-durru wa anta arḥamu al-rāḥimīn",
    translation: 'Harm has touched me, and You are the Most Merciful of those who show mercy.',
    story:
      'Prophet Ayyub (Job) عليه السلام endured years of devastating illness, loss of wealth, and loss of family — yet never abandoned gratitude or patience. When the pain became unbearable, he did not demand relief. He simply stated his reality to his Lord, placing it before the One who is the Most Merciful. Allah responded by ending his suffering and restoring everything — and more.',
    reflection:
      'This dua is one of the most honest prayers in the Qur\'an. It makes no demands. It contains no bargaining. It is simply: "I am suffering, and You are Mercy itself." In that raw honesty is a profound trust — that simply being known by Allah is enough. You do not need to explain why you deserve relief. You only need to turn.',
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Anbiya 21:83', authenticity: "Direct from Qur'an" },
    ],
    guidance:
      'Recite this dua when illness, chronic pain, or suffering feels endless. It is particularly powerful when you feel you have no more words — because these few words carry everything.',
  },
  'dua-of-yunus': {
    slug: 'dua-of-yunus',
    category: 'Distress & Repentance',
    title: 'Dua of Yunus — The Light in the Depths',
    arabic: 'لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
    transliteration: "Lā ilāha illā anta subḥānaka innī kuntu minaz-zālimīn",
    translation:
      'There is no deity except You. Exalted are You. Indeed, I have been of the wrongdoers.',
    story:
      'Prophet Yunus (Jonah) عليه السلام left his people without permission from Allah, boarded a ship that was cast into a storm, was thrown overboard, and swallowed by a whale. In three layers of darkness — the darkness of the sea, the darkness of the night, and the darkness of the whale\'s belly — he called out to Allah. The Qur\'an tells us Allah responded and saved him.',
    reflection:
      'This dua begins with tawhid — the Oneness of Allah — moves to tasbih — His exaltedness above all imperfection — and ends with full admission of wrongdoing. It contains no excuse-making, no minimising. This combination of acknowledging Allah\'s greatness alongside owning our own failure is, scholars say, why this dua is so powerfully answered. Darkness is not the end. It is sometimes the place where you finally call out.',
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Anbiya 21:87', authenticity: "Direct Revelation" },
      {
        type: 'Hadith',
        ref: 'Sunan at-Tirmidhi 3505',
        authenticity: 'Authentic (Hasan Sahih)',
      },
    ],
    guidance:
      'Recite this with full presence during overwhelming distress. The Prophet ﷺ said: "No Muslim calls upon Allah with it in any matter except that Allah responds to him."',
  },
  'dua-for-anxiety': {
    slug: 'dua-for-anxiety',
    category: 'Hardship & Anxiety',
    title: 'Hasbiyallah — Allah Is Enough',
    arabic:
      'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
    transliteration:
      "Ḥasbiyallāhu lā ilāha illā huwa 'alayhi tawakkaltu wa huwa Rabbul 'arshil 'aẓīm",
    translation:
      'Allah is sufficient for me. There is no god but He. I have placed my trust in Him, and He is the Lord of the Mighty Throne.',
    story:
      'The Prophet ﷺ taught this dua during the most threatening period of his mission. When facing persecution in Makkah, when enemies plotted, when the believers were few and fear was constant, this was the affirmation he returned to. It is both a statement and a practice of surrender.',
    reflection:
      'Anxiety feeds on the illusion that outcomes depend entirely on us. This dua is its antidote — not by denying reality, but by locating it correctly. "He is the Lord of the Mighty Throne" means: the worst thing that could happen is still inside His dominion. Every fear, every threat, every worst-case scenario — still under the Throne. This dua does not promise ease. It promises company.',
    sources: [
      { type: "Qur'an", ref: 'Surah At-Tawbah 9:129', authenticity: "Direct from Qur'an" },
      { type: 'Hadith', ref: 'Sahih Bukhari 6346', authenticity: 'Authentic' },
    ],
    guidance:
      'Recite seven times morning and evening, and especially when the chest tightens. The Prophet ﷺ said: "Whoever says this seven times every morning and evening, Allah will take care of whatever worries him."',
  },
  'dua-of-ibrahim': {
    slug: 'dua-of-ibrahim',
    category: 'Surrender & Tawakkul',
    title: 'Dua of Ibrahim — Complete Surrender',
    arabic: 'وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ',
    transliteration: "Wa ufawwiḍu amrī ilallāh innallāha baṣīrun bil-'ibād",
    translation:
      'And I entrust my affair to Allah. Indeed, Allah is Seeing of His servants.',
    story:
      'These words were spoken by a believer in Pharaoh\'s court who had hidden his faith. When he could hide no longer and faced the wrath of the most powerful ruler of his time, he turned entirely to Allah — not with a request for victory, but with full surrender. The Qur\'an tells us Allah protected him from what they plotted.',
    reflection:
      'Tawakkul is often misunderstood as passivity. This dua reveals its true nature: it is an act of seeing clearly. "Allah is Seeing of His servants" — this is not a platitude. It is the recognition that Allah watches every detail of every affair, including yours. To entrust is not to abandon care. It is to release the outcome to the One who sees better than you do.',
    sources: [
      { type: "Qur'an", ref: 'Surah Ghafir 40:44', authenticity: "Direct from Qur'an" },
    ],
    guidance:
      'Say this when you have done what you can, and what remains is beyond your hands. When results are out of your control, when a decision has been made, when all you can do is wait — this is that dua.',
  },
  'dua-for-relief': {
    slug: 'dua-for-relief',
    category: 'Overwhelm & Exhaustion',
    title: 'Rabbi Inni Maghloob — I Am Overpowered',
    arabic: 'رَبِّ إِنِّي مَغْلُوبٌ فَانتَصِرْ',
    transliteration: "Rabbi innī maghglūbun fantasir",
    translation: 'My Lord, I am overpowered — so help me.',
    story:
      "Prophet Nuh (Noah) عليه السلام called his people to Allah for 950 years. He was mocked, threatened, ignored. His own son refused him. When he had truly exhausted every effort — every argument, every approach, every degree of patience — he finally called to Allah: I am overwhelmed. Help me. And the response came.",
    reflection:
      'There is permission in this dua. Permission to admit you are exhausted. Permission to say: I have given everything I have, and it is not enough. There is no shame in this admission — Nuh عليه السلام made it after nearly a millennium of effort. Admitting we are overpowered is not defeat. It is the moment we finally stop carrying what was never ours to carry alone.',
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Qamar 54:10', authenticity: "Direct from Qur'an" },
    ],
    guidance:
      'Use this dua when you are at the end of yourself — emotionally, spiritually, physically. It is specifically for the moments when human effort has reached its limit.',
  },
  'dua-for-protection': {
    slug: 'dua-for-protection',
    category: 'Protection & Fear',
    title: "Hasbunallah Wa Ni'mal Wakeel",
    arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    transliteration: "Ḥasbunallāhu wa ni'mal wakīl",
    translation: 'Allah is enough for us, and He is the best Disposer of affairs.',
    story:
      "These are the exact words the Prophet Ibrahim عليه السلام said when he was thrown into the fire. They are also the words the Prophet Muhammad ﷺ and his companions said when warned: 'A great army has gathered against you — fear them.' The Qur'an tells us their response to that threat increased their faith, not their fear, and they returned with blessings and no harm.",
    reflection:
      "This dua has been tested by fire — literally. Ibrahim عليه السلام did not know the fire would become cool. He simply said these words in the moment of being thrown. The outcome belonged to Allah. The words belong to us. This is what makes it so alive across centuries: it was never about knowing what would happen next. It was about who holds what happens next.",
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Imran 3:173', authenticity: "Direct from Qur'an" },
      { type: 'Hadith', ref: 'Sahih Bukhari 4563', authenticity: 'Authentic' },
    ],
    guidance:
      'Recite when facing a threat — financial, social, physical, or spiritual. The Prophet ﷺ said Ibrahim عليه السلام said this when thrown into the fire, and Muhammad ﷺ said it when warned of an enemy army.',
  },
  'tahlil-complete': {
    slug: 'tahlil-complete',
    category: 'Remembrance & Gratitude',
    title: 'Tahlil — The Complete Declaration of Oneness',
    arabic:
      'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration:
      "Lā ilāha illallāhu waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu wa huwa 'alā kulli shay'in qadīr",
    translation:
      'There is no god but Allah. He is One, and He has no partner with Him; to Him belong the sovereignty and praise, and He is competent over all things.',
    story:
      'The Prophet ﷺ described this as the best dhikr a person can say. In one narration, he taught that whoever says it one hundred times in a day receives the reward of freeing ten slaves, has one hundred good deeds written for him, has one hundred sins erased, and is protected from Shaytan for the rest of that day. He also said it is the most virtuous thing the Prophets before him ever said.',
    reflection:
      'Each phrase in this dhikr builds on the last. "There is no god but Allah" — the foundation of tawhid. "He is One, with no partner" — total uniqueness, nothing comparable. "To Him belong the sovereignty" — all control, all authority, all outcomes rest with Him. "And praise" — not just power, but deserving of gratitude. "And He is competent over all things" — nothing is outside His reach, no situation beyond His ability to change. This is not a recitation. It is an orientation. Say it and mean every clause.',
    sources: [
      {
        type: 'Hadith',
        ref: 'Sahih Bukhari 3293, Sahih Muslim 2691',
        authenticity: 'Authentic (Mutawatir)',
      },
      {
        type: 'Hadith',
        ref: 'Sunan at-Tirmidhi 3468',
        authenticity: 'Authentic',
      },
    ],
    guidance:
      'Recite 100 times in the morning for full-day protection and enormous reward. Also recite after every obligatory prayer (10 times), and whenever the heart feels distant, scattered, or overwhelmed — this dhikr re-centres the soul on what is true.',
  },
    slug: 'dua-for-protection',
    category: 'Protection & Fear',
    title: "Hasbunallah Wa Ni'mal Wakeel",
    arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    transliteration: "Ḥasbunallāhu wa ni'mal wakīl",
    translation: 'Allah is enough for us, and He is the best Disposer of affairs.',
    story:
      "These are the exact words the Prophet Ibrahim عليه السلام said when he was thrown into the fire. They are also the words the Prophet Muhammad ﷺ and his companions said when warned: 'A great army has gathered against you — fear them.' The Qur'an tells us their response to that threat increased their faith, not their fear, and they returned with blessings and no harm.",
    reflection:
      "This dua has been tested by fire — literally. Ibrahim عليه السلام did not know the fire would become cool. He simply said these words in the moment of being thrown. The outcome belonged to Allah. The words belong to us. This is what makes it so alive across centuries: it was never about knowing what would happen next. It was about who holds what happens next.",
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Imran 3:173', authenticity: "Direct from Qur'an" },
      { type: 'Hadith', ref: 'Sahih Bukhari 4563', authenticity: 'Authentic' },
    ],
    guidance:
      'Recite when facing a threat — financial, social, physical, or spiritual. The Prophet ﷺ said Ibrahim عليه السلام said this when thrown into the fire, and Muhammad ﷺ said it when warned of an enemy army.',
  },
}

export const allDuas: Dua[] = Object.values(duasData)

export function getDua(slug: string): Dua | null {
  return duasData[slug] ?? null
}
