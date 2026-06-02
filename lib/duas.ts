export interface DuaSource {
  type: string
  ref: string
  authenticity: string
}

export interface DuaTranslation {
  transliteration: string
  translation: string
}

export interface Dua {
  slug: string
  category: string
  title: string
  arabic: string
  translations: Record<string, DuaTranslation>
  story: string
  reflection: string
  sources: DuaSource[]
  guidance: string
}

export const LANGUAGES = {
  ar: 'العربية (Arabic)',
  az: 'Azərbaycan (Azerbaijani)',
  bn: 'বাংলা (Bengali)',
  bs: 'Bosanski (Bosnian)',
  zh: '中文 (Chinese)',
  nl: 'Nederlands (Dutch)',
  en: 'English',
  fr: 'Français (French)',
  de: 'Deutsch (German)',
  ha: 'Hausa',
  hi: 'हिन्दी (Hindi)',
  id: 'Bahasa Indonesia (Indonesian)',
  it: 'Italiano (Italian)',
  ja: '日本語 (Japanese)',
  jv: 'Basa Jawa (Javanese)',
  kk: 'Қазақ (Kazakh)',
  ko: '한국어 (Korean)',
  ku: 'Kurdî (Kurdish)',
  ms: 'Bahasa Melayu (Malay)',
  ml: 'മലയാളം (Malayalam)',
  pa: 'ਪੰਜਾਬੀ (Punjabi)',
  ps: 'پښتو (Pashto)',
  fa: 'فارسی (Persian)',
  pl: 'Polski (Polish)',
  pt: 'Português (Portuguese)',
  ro: 'Română (Romanian)',
  ru: 'Русский (Russian)',
  sd: 'سنڌي (Sindhi)',
  si: 'සිංහල (Sinhala)',
  so: 'Soomaali (Somali)',
  es: 'Español (Spanish)',
  sw: 'Kiswahili (Swahili)',
  tl: 'Tagalog (Filipino)',
  ta: 'தமிழ் (Tamil)',
  te: 'తెలుగు (Telugu)',
  th: 'ไทย (Thai)',
  tr: 'Türkçe (Turkish)',
  tk: 'Türkmen (Turkmen)',
  ug: 'ئۇيغۇر (Uyghur)',
  ur: 'اردو (Urdu)',
  uz: 'Oʻzbek (Uzbek)',
  vi: 'Tiếng Việt (Vietnamese)',
  yo: 'Yorùbá (Yoruba)',
} as const

export type LanguageCode = keyof typeof LANGUAGES

export const duasData: Record<string, Dua> = {
  'dua-of-ayyub': {
    slug: 'dua-of-ayyub',
    category: 'Illness & Suffering',
    title: 'Dua of Ayyub — When Pain Is All You Know',
    arabic: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
    translations: {
      en: {
        transliteration: "Annī massaniya al-durru wa anta arḥamu al-rāḥimīn",
        translation: 'Harm has touched me, and You are the Most Merciful of those who show mercy.',
      },
    },
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
    translations: {
      en: {
        transliteration: "Lā ilāha illā anta subḥānaka innī kuntu minaz-zālimīn",
        translation: 'There is no deity except You. Exalted are You. Indeed, I have been of the wrongdoers.',
      },
    },
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
    translations: {
      en: {
        transliteration: "Ḥasbiyallāhu lā ilāha illā huwa 'alayhi tawakkaltu wa huwa Rabbul 'arshil 'aẓīm",
        translation: 'Allah is sufficient for me. There is no god but He. I have placed my trust in Him, and He is the Lord of the Mighty Throne.',
      },
    },
    story:
      'These Qur\'anic words teach the believer to meet fear with reliance on Allah. They gather sufficiency, tawhid, trust, and the majesty of the Lord of the Mighty Throne into one remembrance.',
    reflection:
      'Anxiety feeds on the illusion that outcomes depend entirely on us. This dua is its antidote — not by denying reality, but by locating it correctly. "He is the Lord of the Mighty Throne" means: the worst thing that could happen is still inside His dominion. Every fear, every threat, every worst-case scenario — still under the Throne. This dua does not promise ease. It promises company.',
    sources: [
      { type: "Qur'an", ref: 'Surah At-Tawbah 9:129', authenticity: "Direct from Qur'an" },
      { type: 'Hadith', ref: 'Sunan Abi Dawud 5081', authenticity: 'Reported; authenticity differed upon' },
    ],
    guidance:
      'Recite it as a Qur\'anic remembrance when the chest tightens. Some narrations mention saying it seven times morning and evening, though scholars differ on that report, so hold the wording firmly and the specific routine with care.',
  },
  'dua-of-ibrahim': {
    slug: 'dua-of-ibrahim',
    category: 'Surrender & Tawakkul',
    title: 'Dua of the Believer — Complete Surrender',
    arabic: 'وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ',
    translations: {
      en: {
        transliteration: "Wa ufawwiḍu amrī ilallāh innallāha baṣīrun bil-'ibād",
        translation: 'And I entrust my affair to Allah. Indeed, Allah is Seeing of His servants.',
      },
    },
    story:
      'These words were spoken by a believer from Pharaoh\'s people who had hidden his faith. When he could hide no longer and faced the wrath of the most powerful ruler of his time, he turned entirely to Allah — not with a request for victory, but with full surrender. The Qur\'an tells us Allah protected him from what they plotted.',
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
    translations: {
      en: {
        transliteration: "Rabbi innī maghlūbun fantasir",
        translation: 'My Lord, I am overpowered — so help me.',
      },
    },
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
    translations: {
      en: {
        transliteration: "Ḥasbunallāhu wa ni'mal wakīl",
        translation: 'Allah is enough for us, and He is the best Disposer of affairs.',
      },
    },
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
  'coolness-of-eyes': {
    slug: 'coolness-of-eyes',
    category: 'Family & Marriage',
    title: 'Coolness of the Eyes at Home',
    arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    translations: {
      en: {
        transliteration: "Rabbanā hab lanā min azwājinā wa dhurriyyātinā qurrata a'yūnin waj'alnā lil-muttaqīna imāmā",
        translation: 'Our Lord, grant us from our spouses and descendants comfort to our eyes, and make us examples for the mindful.',
      },
    },
    story:
      'The Qur\'an places this dua among the defining qualities of the servants of the Most Merciful — those whose deepest hopes are not shallow. They do not only want a family that looks good from the outside. They ask Allah to make their spouses and descendants a source of qurrat a\'yun: coolness of the eyes. That phrase carries relief after heat, the kind of joy that does not agitate the heart. The dua then rises into responsibility: make us leaders for the mindful — a home not only soothing, but guiding.',
    reflection:
      'This is a mature family dua. It asks for tenderness and taqwa together. It asks Allah to make the people closest to you a reason your faith becomes steadier, not weaker. Not every family story is simple — some recite this dua with gratitude, some with fear, some with longing, some with grief. All of those hearts can still ask Allah to place coolness where there has been heat.',
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Furqan 25:74', authenticity: "Direct from Qur'an" },
    ],
    guidance:
      'Whisper it for your spouse, your children, your future family, your parents, or your own wounded sense of home. Ask Allah to build a household that your eyes can rest in and your akhirah can benefit from.',
  },
  'dua-of-musa-for-need': {
    slug: 'dua-of-musa-for-need',
    category: 'Rizq & Need',
    title: 'Dua of Musa — The Shade of the Tree',
    arabic: 'رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
    translations: {
      en: {
        transliteration: "Rabbi innī limā anzalta ilayya min khayrin faqīr",
        translation: 'My Lord, I am in need of whatever good You send down to me.',
      },
    },
    story:
      'Prophet Musa عليه السلام reached Madyan after fleeing danger — no secure income, no familiar room, no clear next step. At the well he saw two women holding back their flock. Even in need, he still helped them, then withdrew to the shade. There, away from the crowd, he did not advertise his desperation. He turned upward and placed his poverty before Allah. Allah opened a path from where Musa could not have engineered it — an invitation came, safety came, work came, family came.',
    reflection:
      'The word that opens the heart here is khayr — goodness. Musa عليه السلام does not dictate the form of the rescue. He does not say: send this exact job, this exact house, this exact outcome. He says in effect: whatever good You send, I need it. It is a dua of dignified poverty before Allah. The hands are empty, but they are not frantic. The future is blank, but it is not godless.',
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Qasas 28:24', authenticity: "Direct from Qur'an" },
    ],
    guidance:
      'When you feel bankrupt emotionally, financially, or spiritually — step into the shade. Ask Allah for khayr in the form He knows is best, even if you cannot yet name it. Your provision is not trapped in the hands of people; it descends by the command of Allah.',
  },
  'hearts-do-not-deviate': {
    slug: 'hearts-do-not-deviate',
    category: 'Steadfastness & Faith',
    title: 'Hold My Heart After Guidance',
    arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',
    translations: {
      en: {
        transliteration: "Rabbanā lā tuzigh qulūbanā ba'da idh hadaytanā wa hab lanā min ladunka raḥmah",
        translation: 'Our Lord, do not let our hearts deviate after You have guided us, and grant us mercy from Yourself.',
      },
    },
    story:
      'There is a fear known by people who have tasted guidance: what if my heart changes? What if what feels clear today becomes distant tomorrow? This fear is not hopelessness — it is humility. It means you understand that guidance was never a trophy you earned; it was a gift Allah placed in your chest. The heart is subtle. It can be moved by praise, pain, desire, resentment, doubt, and distraction. So the believers ask Allah not to let their hearts drift.',
    reflection:
      'The dua continues: grant us mercy from Yourself. Steadfastness is not powered by self-admiration. It is sustained by mercy. This changes how you think about religious consistency — you still take the means: prayer, repentance, good company, knowledge. But beneath every means is a plea: O Allah, keep my heart with You. Say this when faith feels sweet, and say it when faith feels fragile.',
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Imran 3:8', authenticity: "Direct from Qur'an" },
    ],
    guidance:
      'For the guided person who refuses to become arrogant about guidance. For the returning person, the student, the parent, the convert, the sinner trying again, and the worshiper who knows tomorrow is not guaranteed.',
  },
  'rabbana-atina': {
    slug: 'rabbana-atina',
    category: 'World & Hereafter',
    title: 'Rabbana Atina — Good in Both Homes',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    translations: {
      en: {
        transliteration: "Rabbanā ātinā fid-dunyā ḥasanah wa fil-ākhirati ḥasanah wa qinā 'adhāban-nār",
        translation: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',
      },
    },
    story:
      "The Prophet ﷺ loved and frequently recited this dua. Anas ibn Malik reported that it was the dua the Prophet ﷺ made most often. Allah teaches a comprehensive request: good in the dunya, good in the akhirah, and protection from the Fire. It is short enough for the tongue and wide enough for a lifetime. The word ḥasanah is beautifully open — it includes what Allah knows to be truly good, not merely what the nafs mistakes for relief.",
    reflection:
      'Some people feel guilty asking Allah for worldly ease. Others become so consumed with immediate needs that the Hereafter becomes distant in their asking. This dua gathers the whole human being back into balance. It trains you not to split your life into sacred and ordinary. Your meals, work, marriage, healing, worship, death, and resurrection are all placed before one Lord. The dua ends by asking protection from the Fire — because every worldly good loses meaning if it leads away from Allah.',
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Baqarah 2:201', authenticity: "Direct from Qur'an" },
      { type: 'Hadith', ref: 'Sahih Bukhari 6389, Sahih Muslim 2690', authenticity: 'Authentic' },
    ],
    guidance:
      'When you do not know what to ask, ask broadly and humbly. Let Allah choose the shape of ḥasanah for you in both homes. The Prophet ﷺ made this the most frequent of his duas — there is wisdom in its comprehensiveness.',
  },
  'subhanallah': {
    slug: 'subhanallah',
    category: 'Dhikr & Glorification',
    title: 'SubhanAllah — Glory Be to Allah',
    arabic: 'سُبْحَانَ اللَّهِ',
    translations: {
      en: {
        transliteration: 'SubḥānAllāh',
        translation: 'Glory be to Allah.',
      },
    },
    story:
      'This short remembrance is one of the foundational words of dhikr. It declares Allah far above every imperfection, weakness, injustice, need, or limit. The Prophet ﷺ taught tasbih alongside tahmid and takbir as words to say after prayer and throughout the day, so the tongue keeps returning to the perfection of its Lord.',
    reflection:
      'SubhanAllah is a way of cleaning the heart\'s view of Allah. When life feels confusing, it reminds you that Allah is not like creation: His wisdom is complete, His mercy is pure, and His decree is never flawed. It shifts the soul from measuring Allah by pain to seeing pain under the majesty of Allah.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Muslim 597', authenticity: 'Authentic' },
      { type: 'Hadith', ref: 'Sahih Muslim 2695', authenticity: 'Authentic' },
    ],
    guidance:
      'Use this dhikr when you see beauty, witness Allah\'s signs, or need to remind your heart that Allah is perfect in every name, attribute, command, and decree.',
  },
  'alhamdulillah': {
    slug: 'alhamdulillah',
    category: 'Dhikr & Gratitude',
    title: 'Alhamdulillah — All Praise Is Due to Allah',
    arabic: 'الْحَمْدُ لِلَّهِ',
    translations: {
      en: {
        transliteration: 'Alḥamdulillāh',
        translation: 'All praise is due to Allah.',
      },
    },
    story:
      'Alhamdulillah is the language of gratitude, praise, and recognition. It is how the Qur\'an opens in Surah Al-Fatihah, and it is a phrase the believer returns to in ease and hardship because Allah remains worthy of praise in every state.',
    reflection:
      'Gratitude is not only a response to receiving what you wanted. It is the recognition that every breath, every hidden protection, every delayed harm, and every door to repentance is from Allah. Alhamdulillah teaches the heart to notice blessings before it complains about what is missing.',
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Fatihah 1:2', authenticity: "Direct from Qur'an" },
      { type: 'Hadith', ref: 'Sahih Muslim 223', authenticity: 'Authentic' },
    ],
    guidance:
      'Say it after blessings, after relief, after hardship, and in ordinary moments. Let it become the phrase that trains your heart to see Allah\'s generosity everywhere.',
  },
  'allahu-akbar': {
    slug: 'allahu-akbar',
    category: 'Dhikr & Magnification',
    title: 'Allahu Akbar — Allah Is the Greatest',
    arabic: 'اللَّهُ أَكْبَرُ',
    translations: {
      en: {
        transliteration: 'Allāhu Akbar',
        translation: 'Allah is the Greatest.',
      },
    },
    story:
      'The words Allahu Akbar begin the prayer and echo through the greatest acts of worship. They remind the believer that Allah is greater than every fear, achievement, attachment, enemy, desire, and difficulty.',
    reflection:
      'Saying Allahu Akbar does not make problems disappear; it puts them in their proper size. The heart often magnifies what it fears or loves. This dhikr restores the scale: Allah is greater, nearer, more powerful, and more deserving of your attention than anything competing for your heart.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Muslim 597', authenticity: 'Authentic' },
      { type: "Qur'an", ref: 'Surah Al-Isra 17:111', authenticity: "Direct from Qur'an" },
    ],
    guidance:
      'Use this dhikr when fear becomes loud, when blessings amaze you, and when you need to return your attention from the size of creation to the greatness of the Creator.',
  },
  'la-ilaha-illallah': {
    slug: 'la-ilaha-illallah',
    category: 'Dhikr & Tawhid',
    title: 'La Ilaha Illallah — The Word of Oneness',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ',
    translations: {
      en: {
        transliteration: 'Lā ilāha illallāh',
        translation: 'There is no deity except Allah.',
      },
    },
    story:
      'This is the foundation of Islam and the root of all remembrance. Every act of worship, every dua, and every hope in Allah grows from this truth: no one is worthy of worship except Him.',
    reflection:
      'La ilaha illallah is not only a statement of belief; it is a liberation. It releases the heart from worshiping approval, fear, wealth, status, desire, or people. The more sincerely it is lived, the less creation owns your inner world.',
    sources: [
      { type: "Qur'an", ref: 'Surah Muhammad 47:19', authenticity: "Direct from Qur'an" },
      { type: 'Hadith', ref: 'Sunan at-Tirmidhi 3383', authenticity: 'Authentic' },
    ],
    guidance:
      'Repeat it with presence when you want to renew faith, fight attachment, or return your heart to the One who alone deserves worship.',
  },
  'astaghfirullah': {
    slug: 'astaghfirullah',
    category: 'Dhikr & Repentance',
    title: 'Astaghfirullah — I Seek Allah’s Forgiveness',
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    translations: {
      en: {
        transliteration: 'Astaghfirullāh',
        translation: 'I seek forgiveness from Allah.',
      },
    },
    story:
      'Istighfar is the believer\'s constant return. The Prophet ﷺ, though forgiven, sought Allah\'s forgiveness repeatedly, teaching the ummah that repentance is not only for moments of collapse but part of a living relationship with Allah.',
    reflection:
      'Astaghfirullah is hope in one word. It refuses despair and refuses arrogance at the same time. You admit the wound, but you bring it to the One whose mercy is greater than your sin.',
    sources: [
      { type: "Qur'an", ref: 'Surah Nuh 71:10', authenticity: "Direct from Qur'an" },
      { type: 'Hadith', ref: 'Sahih Muslim 2702', authenticity: 'Authentic' },
    ],
    guidance:
      'Use it after sins, after heedlessness, after worship, and throughout the day. Let it be a soft turning back before the heart becomes hard.',
  },
  'la-hawla-wa-la-quwwata': {
    slug: 'la-hawla-wa-la-quwwata',
    category: 'Dhikr & Reliance',
    title: 'La Hawla Wa La Quwwata Illa Billah — Strength Is Only with Allah',
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    translations: {
      en: {
        transliteration: 'Lā ḥawla wa lā quwwata illā billāh',
        translation: 'There is no power and no strength except with Allah.',
      },
    },
    story:
      'The Prophet ﷺ described this remembrance as a treasure from the treasures of Paradise. It teaches that no movement away from sin and no strength to obey Allah happens except by Allah\'s help.',
    reflection:
      'This dhikr is spiritual surrender without passivity. You still act, plan, work, apologise, seek help, and try again — but you stop pretending that your strength is self-produced. It turns exhaustion into dependence on Allah rather than resentment at your limits.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Bukhari 6384, Sahih Muslim 2704', authenticity: 'Authentic' },
    ],
    guidance:
      'Say it when a matter feels too heavy, when obedience feels difficult, when avoiding sin feels hard, or when you need to remember that every real strength comes from Allah.',
  },
  'subhanallahi-wa-bihamdihi-subhanallahil-adheem': {
    slug: 'subhanallahi-wa-bihamdihi-subhanallahil-adheem',
    category: 'Dhikr & Praise',
    title: 'Beloved Words — Light on the Tongue, Heavy on the Scale',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
    translations: {
      en: {
        transliteration: 'SubḥānAllāhi wa biḥamdihi, SubḥānAllāhil-ʿAẓīm',
        translation: 'Glory is to Allah and praise is to Him; glory is to Allah, the Most Great.',
      },
    },
    story:
      'The Prophet ﷺ described these two phrases as light on the tongue, heavy on the scale, and beloved to the Most Merciful. They combine Allah\'s perfection, praise, and greatness in words simple enough to carry through the day.',
    reflection:
      'Some acts of worship are heavy because they require time, strength, or privacy. This dhikr is a mercy for ordinary moments. It teaches that the scale of the Hereafter is filled not only by dramatic deeds, but by sincere words repeated with love and awareness.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Bukhari 6682, Sahih Muslim 2694', authenticity: 'Authentic' },
    ],
    guidance:
      'Repeat it during commutes, pauses, chores, or quiet moments. Let its ease encourage consistency rather than carelessness.',
  },
  'allahumma-inni-asaluka-al-afwa-wal-afiyah': {
    slug: 'allahumma-inni-asaluka-al-afwa-wal-afiyah',
    category: 'Dua for Pardon & Well-Being',
    title: 'Pardon and Well-Being',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ',
    translations: {
      en: {
        transliteration: "Allāhumma innī as'aluka al-ʿafwa wal-ʿāfiyah",
        translation: 'O Allah, I ask You for pardon and well-being.',
      },
    },
    story:
      'The Prophet ﷺ taught the believers to ask Allah for both pardon and well-being. Pardon covers the burden of sins, while well-being asks Allah for protection and safety in faith, body, family, and life.',
    reflection:
      'This dua is humble because it does not assume we can carry every trial well, nor that we can survive the consequences of every mistake. It asks Allah to erase what harms us spiritually and preserve what keeps us whole.',
    sources: [
      { type: 'Hadith', ref: 'Sunan Abi Dawud 5074, Sunan Ibn Majah 3871', authenticity: 'Authentic/Hasan' },
    ],
    guidance:
      'Use it morning and evening, when asking for health, protection, forgiveness, and a life held under Allah\'s gentle covering.',
  },
  'rabbighfir-li-waliwalidayya': {
    slug: 'rabbighfir-li-waliwalidayya',
    category: 'Dua for Family & Believers',
    title: 'Forgive Me, My Parents, and the Believers',
    arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
    translations: {
      en: {
        transliteration: 'Rabbighfir lī wa liwālidayya wa lil-muʾminīna yawma yaqūmul-ḥisāb',
        translation: 'My Lord, forgive me, my parents, and the believers on the Day the Reckoning is established.',
      },
    },
    story:
      'This Qur\'anic dua of Ibrahim عليه السلام gathers personal forgiveness, love for parents, and concern for the entire believing community in one request. It points the heart toward the Day when forgiveness will matter most.',
    reflection:
      'A sincere believer does not only ask for the self. This dua widens the heart: me, my parents, and the believers. It also places family love under the highest need — Allah\'s forgiveness on the Day of Account.',
    sources: [
      { type: "Qur'an", ref: 'Surah Ibrahim 14:41', authenticity: "Direct from Qur'an" },
    ],
    guidance:
      'Recite it for yourself, your parents, and the ummah, especially after prayer and whenever remembering loved ones who need Allah\'s mercy.',
  },
  'allahumma-ajirni-minan-naar': {
    slug: 'allahumma-ajirni-minan-naar',
    category: 'Dua for Protection',
    title: 'Protect Me from the Fire',
    arabic: 'اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ',
    translations: {
      en: {
        transliteration: 'Allāhumma ajirnī minan-nār',
        translation: 'O Allah, protect me from the Fire.',
      },
    },
    story:
      'Seeking protection from the Fire is among the most serious and repeated needs of a believer. This short dua brings the Hereafter close and asks Allah directly for rescue from the greatest loss.',
    reflection:
      'The Fire is not an abstract idea in the Qur\'an; it is a reality that makes every worldly fear smaller. Asking protection from it is not meant to create despair, but urgency: a heart that remembers the end becomes more honest about its path today.',
    sources: [
      { type: 'Hadith', ref: 'Sunan Abi Dawud 5079', authenticity: 'Hasan' },
    ],
    guidance:
      'Recite it with humility, especially after prayer and in morning or evening remembrance, asking Allah to protect your deeds, choices, and end from the path of punishment.',
  },
  'allahumma-inni-audhu-bika-min-fitnatil-mahya': {
    slug: 'allahumma-inni-audhu-bika-min-fitnatil-mahya',
    category: 'Dua for Trials & Protection',
    title: 'Protection from the Trials of Life, Death, and Dajjal',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَفِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
    translations: {
      en: {
        transliteration: "Allāhumma innī aʿūdhu bika min fitnatil-maḥyā wal-mamāt wa fitnatil-Masīḥid-Dajjāl",
        translation: 'O Allah, I seek refuge in You from the trials of life and death, and from the trial of the False Messiah.',
      },
    },
    story:
      'The Prophet ﷺ taught seeking refuge from major trials, including the trials of life and death and the trial of the False Messiah. These words are connected to the believer\'s protection in prayer and beyond it.',
    reflection:
      'Not every trial announces itself as a trial. Some arrive as desire, fame, confusion, comfort, fear, or persuasive falsehood. This dua admits that guidance and safety are gifts, and that we need Allah to protect us from what we cannot fully see coming.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Bukhari 1377, Sahih Muslim 588', authenticity: 'Authentic' },
    ],
    guidance:
      'Say it in prayer before taslim and whenever the world feels spiritually confusing. Ask Allah for protection before a trial, not only relief after it arrives.',
  },
  'alhamdulillahi-rabbil-alamin': {
    slug: 'alhamdulillahi-rabbil-alamin',
    category: 'Praise & Gratitude',
    title: 'Alhamdulillahi Rabbil Alamin — Lord of All Worlds',
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    translations: {
      en: {
        transliteration: 'Alḥamdulillāhi Rabbil-ʿālamīn',
        translation: 'All praise is due to Allah, Lord of all the worlds.',
      },
    },
    story:
      'This is the opening praise of Surah Al-Fatihah, the chapter recited in every unit of prayer. It teaches the servant to begin with praise before asking, and to know Allah as the Lord, Nurturer, and Sustainer of every world.',
    reflection:
      'When you say Lord of all the worlds, your private life is placed inside a much greater reality. Allah is not only managing your immediate concern; He is sustaining every seen and unseen world with perfect knowledge. Praise becomes trust.',
    sources: [
      { type: "Qur'an", ref: 'Surah Al-Fatihah 1:2', authenticity: "Direct from Qur'an" },
    ],
    guidance:
      'Use this praise to begin dua, renew gratitude, and remember that your needs are held by the Lord who sustains every realm.',
  },
  'subhanaka-allahumma-wa-bihamdika': {
    slug: 'subhanaka-allahumma-wa-bihamdika',
    category: 'Praise & Repentance',
    title: 'Subhanaka Allahumma — A Closing Praise and Repentance',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
    translations: {
      en: {
        transliteration: 'Subḥānaka Allāhumma wa biḥamdika, ash-hadu an lā ilāha illā anta, astaghfiruka wa atūbu ilayk',
        translation: 'Glory and praise be to You, O Allah. I bear witness that there is no deity except You. I seek Your forgiveness and turn to You in repentance.',
      },
    },
    story:
      'This supplication is known as an expiation for gatherings. It closes speech and action with Allah\'s glorification, tawhid, seeking forgiveness, and repentance.',
    reflection:
      'Even good gatherings can contain slips: a careless word, showing off, distraction, or a missed right. This dua teaches a beautiful etiquette: end by praising Allah and seeking forgiveness, because no human action is free from need of His mercy.',
    sources: [
      { type: 'Hadith', ref: 'Sunan Abi Dawud 4859, Jami at-Tirmidhi 3433', authenticity: 'Authentic' },
    ],
    guidance:
      'Recite it at the end of gatherings, meetings, study circles, conversations, or any action you want to seal with praise, tawhid, and repentance.',
  },
  'tahlil-complete': {
    slug: 'tahlil-complete',
    category: 'Remembrance & Gratitude',
    title: 'Tahlil — The Complete Declaration of Oneness',
    arabic:
      'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    translations: {
      en: {
        transliteration: "Lā ilāha illallāhu waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu wa huwa 'alā kulli shay'in qadīr",
        translation: 'There is no god but Allah. He is One, and He has no partner with Him; to Him belong the sovereignty and praise, and He is competent over all things.',
      },
    },
    story:
      'The Prophet ﷺ described this as the best dhikr a person can say. In one narration, he taught that whoever says it one hundred times in a day receives the reward of freeing ten slaves, has one hundred good deeds written for him, has one hundred sins erased, and is protected from Shaytan for the rest of that day. He also said it is the most virtuous thing the Prophets before him ever said.',
    reflection:
      'Each phrase in this dhikr builds on the last. "There is no god but Allah" — the foundation of tawhid. "He is One, with no partner" — total uniqueness, nothing comparable. "To Him belong the sovereignty" — all control, all authority, all outcomes rest with Him. "And praise" — not just power, but deserving of gratitude. "And He is competent over all things" — nothing is outside His reach, no situation beyond His ability to change. This is not a recitation. It is an orientation. Say it and mean every clause.',
    sources: [
      {
        type: 'Hadith',
        ref: 'Sahih Bukhari 3293, Sahih Muslim 2691',
        authenticity: 'Authentic',
      },
      {
        type: 'Hadith',
        ref: 'Sunan at-Tirmidhi 3468',
        authenticity: 'Authentic',
      },
    ],
    guidance:
      'Recite 100 times in a day for the narrated reward and protection. Also recite after obligatory prayers where established, and whenever the heart feels distant, scattered, or overwhelmed — this dhikr re-centres the soul on what is true.',
  },
}

function normalizeArabic(text: string) {
  return text
    .normalize('NFKD')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[،؛؟\s]/g, '')
}

export const allDuas: Dua[] = Array.from(
  new Map(Object.values(duasData).map((dua) => [normalizeArabic(dua.arabic), dua])).values(),
)

export function getDua(slug: string): Dua | null {
  return duasData[slug] ?? null
}
