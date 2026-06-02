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
      { type: "Qur'an", ref: 'Surah Al-Anbiya 21:87', authenticity: 'Direct Revelation' },
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
    transliteration: 'Rabbi innī maghglūbun fantasir',
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

  // ─── The 6 Kalimas ───────────────────────────────────────────────

  'kalima-tayyab': {
    slug: 'kalima-tayyab',
    category: 'The 6 Kalimas',
    title: 'First Kalima — Tayyab (Purity)',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
    transliteration: 'Lā ilāha illallāhu Muḥammadur rasūlullāh',
    translation: 'There is no god but Allah; Muhammad is the Messenger of Allah.',
    story:
      'This is the most fundamental statement in Islam — the declaration upon which the entire faith is built. It is the first thing whispered into a newborn\'s ear and the last words a Muslim hopes to utter before death. The Prophet ﷺ said: "Whoever\'s last words are \'Lā ilāha illallāh\' will enter Paradise." Every prayer, every act of worship, every moment of a Muslim\'s life circles back to this declaration.',
    reflection:
      'Two truths in seven words. The first — "there is no god but Allah" — strips away every false object of worship: wealth, status, approval, fear of people. The second — "Muhammad is the Messenger of Allah" — grounds the abstract in the concrete, confirming how to live this truth. Together they are not just a statement to be recited but a lens through which to see everything. To truly believe these words is to be freed from every other claim on your soul.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Bukhari 1237', authenticity: 'Authentic' },
      { type: 'Hadith', ref: 'Sahih Muslim 26', authenticity: 'Authentic' },
    ],
    guidance:
      'This is the Kalima of entrance into Islam and the foundation of all dhikr. Recite it as the heart of your morning and evening remembrance, and return to it whenever faith feels distant. The Prophet ﷺ said renewing it regularly renews faith itself.',
  },

  'kalima-shahadat': {
    slug: 'kalima-shahadat',
    category: 'The 6 Kalimas',
    title: 'Second Kalima — Shahadat (Testimony)',
    arabic:
      'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration:
      "Ash-hadu an lā ilāha illallāhu waḥdahu lā sharīka lahu wa ash-hadu anna Muḥammadan 'abduhu wa rasūluh",
    translation:
      'I bear witness that there is no god but Allah, alone, without any partner; and I bear witness that Muhammad is His servant and His Messenger.',
    story:
      'The Shahadat is the formal testimony that makes a person Muslim and is woven into the fabric of daily life — spoken in the adhān five times a day, recited in every prayer in the Tashahhud, and the testimony a person is encouraged to make before death. When the Prophet ﷺ sent Muadh ibn Jabal عليه السلام to Yemen, the first thing he told him to call people to was this testimony.',
    reflection:
      'The word "ash-hadu" — I bear witness — is significant. A witness is someone who has seen something with certainty. This is not "I believe" or "I think." It is: I have witnessed this truth and I testify to it. Every time this Kalima is recited, the person renews their standing as a conscious, willing witness to the Oneness of Allah and the prophethood of Muhammad ﷺ — not by compulsion or habit, but as a deliberate act of testimony.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Bukhari 8', authenticity: 'Authentic' },
      { type: 'Hadith', ref: 'Sahih Muslim 16', authenticity: 'Authentic' },
    ],
    guidance:
      'Recited in the Tashahhud of every prayer and in the adhān. Say it with full awareness — not as a formula but as a renewed act of witnessing. It is also the recommended final statement for the dying.',
  },

  'kalima-tamjeed': {
    slug: 'kalima-tamjeed',
    category: 'The 6 Kalimas',
    title: 'Third Kalima — Tamjeed (Glorification)',
    arabic:
      'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
    transliteration:
      "Subḥānallāhi wal-ḥamdulillāhi wa lā ilāha illallāhu wallāhu akbar, wa lā ḥawla wa lā quwwata illā billāhil-'aliyyil-'aẓīm",
    translation:
      'Glory be to Allah, and praise be to Allah, and there is no god but Allah, and Allah is the Greatest. And there is no might or power except with Allah, the Most High, the Most Great.',
    story:
      'The Prophet ﷺ described these words as "al-bāqiyāt al-ṣāliḥāt" — the everlasting righteous deeds — the deeds that remain and continue to benefit after a person has passed. In one narration he said these four phrases are more beloved to him than everything the sun rises over. The final phrase — "lā ḥawla wa lā quwwata" — is known as the ḥawqala, and the Prophet ﷺ told Ali رضي الله عنه to hold onto it firmly, for it is a treasure from the treasures of Paradise.',
    reflection:
      'This Kalima is a complete spiritual orientation in a single breath. Subḥānallāh — He is beyond all imperfection. Alḥamdulillāh — all praise belongs to Him. Lā ilāha illallāh — nothing else deserves worship. Allāhu Akbar — He is greater than everything you fear, everything you want, everything you face. And then the anchor: there is no ability to move, no strength to act, except by Him. This is the honest position of the servant — fully dependent, fully surrendered, fully at rest.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Muslim 2137', authenticity: 'Authentic' },
      { type: 'Hadith', ref: 'Sunan Ibn Majah 3812', authenticity: 'Authentic' },
    ],
    guidance:
      'The Prophet ﷺ recommended these phrases after every prayer and before sleep. The ḥawqala — the final clause — is especially recommended during difficulty, when climbing, when overwhelmed, or when feeling powerless.',
  },

  'kalima-tauheed': {
    slug: 'kalima-tauheed',
    category: 'The 6 Kalimas',
    title: 'Fourth Kalima — Tauheed (Unity)',
    arabic:
      'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ أَبَدًا أَبَدًا، ذُو الْجَلَالِ وَالْإِكْرَامِ، بِيَدِهِ الْخَيْرُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration:
      "Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamdu yuḥyī wa yumītu wa huwa ḥayyun lā yamūtu abadan abadā, dhul-jalāli wal-ikrām, biyadihil-khayru wa huwa 'alā kulli shay'in qadīr",
    translation:
      'There is none worthy of worship except Allah. He is One, without partner. His is the kingdom and His is the praise. He gives life and causes death. He is alive and will never die, ever, ever. Possessor of Majesty and Honour. In His hands is all goodness. And He has power over all things.',
    story:
      'This Kalima is an expanded declaration of tawhid — the Oneness of Allah — and closely mirrors the wording the Prophet ﷺ recommended as the best dhikr. It covers every essential attribute: His uniqueness, His sovereignty, His worthiness of praise, His control over life and death, His eternal living nature, His majesty, His goodness, and His absolute power. Nothing is outside its scope.',
    reflection:
      '"He gives life and causes death" — this line sits in the middle of the declaration not by accident. Every human fear ultimately traces back to death and what precedes it: loss, illness, powerlessness. This Kalima looks that fear in the face and responds: the One who causes death is the same One who is praised, who is living and will never die, who holds all goodness in His hand. There is nowhere to run from Him — and nowhere safer to be than in full surrender to Him.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Muslim 2693', authenticity: 'Authentic' },
      { type: 'Hadith', ref: 'Sahih Bukhari 6404', authenticity: 'Authentic' },
    ],
    guidance:
      'Recite this after Fajr and Maghrib prayers, and especially at times when the reality of mortality feels close. The Prophet ﷺ said these words erase sins even if they are as numerous as the foam of the sea.',
  },

  'kalima-astaghfar': {
    slug: 'kalima-astaghfar',
    category: 'The 6 Kalimas',
    title: 'Fifth Kalima — Astaghfar (Seeking Forgiveness)',
    arabic:
      'أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمْدًا أَوْ خَطَأً سِرًّا أَوْ عَلَانِيَةً وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ وَسَتَّارُ الْعُيُوبِ وَغَفَّارُ الذُّنُوبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
    transliteration:
      "Astaghfirullāha rabbī min kulli dhambin adhnabtuhu 'amadan aw khata'an sirran aw 'alāniyatan wa atūbu ilayhi minad-dhambil-ladhī a'lamu wa minad-dhambil-ladhī lā a'lam. Innaka anta 'allāmul-ghuyūbi wa sattārul-'uyūbi wa ghaffārudh-dhunūb. Wa lā ḥawla wa lā quwwata illā billāhil-'aliyyil-'aẓīm",
    translation:
      'I seek forgiveness from Allah, my Lord, from every sin I committed knowingly or unknowingly, secretly or openly. And I turn towards Him from the sin that I know and from the sin that I do not know. Indeed You are the Knower of all hidden things, the Concealer of faults, and the Forgiver of sins. And there is no might or power except with Allah, the Most High, the Most Great.',
    story:
      'The Prophet ﷺ himself — the most sinless of human beings — used to seek forgiveness from Allah more than seventy times a day. When asked why, given that his past and future sins had been forgiven, he said it was out of gratitude and because seeking forgiveness is the nature of the believing heart. This Kalima formalises that practice: a comprehensive acknowledgement that covers every category of sin — intentional, accidental, public, private, known, and unknown.',
    reflection:
      'The phrase "from the sin I do not know" is extraordinary. It acknowledges that we are capable of wrongdoing we are not even aware of — unexamined biases, casual cruelties, moments of ingratitude we never noticed. This is not morbid self-flagellation. It is honest humility: the recognition that our moral vision is limited, and that only Allah sees the full picture. The response to that recognition is not despair — it is turning to the One who is simultaneously the Knower of hidden things and the Forgiver of all sins.',
    sources: [
      { type: 'Hadith', ref: 'Sahih Bukhari 6307', authenticity: 'Authentic' },
      { type: 'Hadith', ref: 'Sahih Muslim 2702', authenticity: 'Authentic' },
    ],
    guidance:
      'Recite in the morning, before sleep, and especially after times when you sense you may have fallen short — in speech, in action, or in thought. The sayyid al-istighfār (master supplication for forgiveness) complements this Kalima and can be recited alongside it.',
  },

  'kalima-radde-kufr': {
    slug: 'kalima-radde-kufr',
    category: 'The 6 Kalimas',
    title: 'Sixth Kalima — Radde Kufr (Rejecting Disbelief)',
    arabic:
      'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ، تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكَذِبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا، وَأَسْلَمْتُ وَأَقُولُ لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
    transliteration:
      "Allāhumma innī a'ūdhu bika min an ushrika bika shay'an wa anā a'lamu bih. Wa astaghfiruka limā lā a'lamu bih. Tubtu 'anhu wa tabarra'tu minal-kufri wash-shirki wal-kadhbi wal-ghībati wal-bid'ati wan-namīmati wal-fawāḥishi wal-buhtāni wal-ma'āṣī kullihā. Wa aslamtu wa aqūlu lā ilāha illallāhu Muḥammadur rasūlullāh",
    translation:
      'O Allah! I seek Your protection from knowingly associating any partner with You. I seek Your forgiveness for what I do not know. I repent from it and I declare myself free of disbelief, polytheism, falsehood, backbiting, innovation, tale-carrying, shameful acts, slander, and all disobedience. I submit and I say: there is no god but Allah, Muhammad is the Messenger of Allah.',
    story:
      'This Kalima is unique among the six — it is not merely an affirmation but an active, comprehensive rejection. It was taught to guard the believer against the subtle ways faith can be eroded: not only obvious shirk, but the quieter corruptions of the tongue and heart — backbiting, slander, lies, and innovations in the religion. It begins with seeking refuge and ends with returning to the First Kalima, forming a complete circle of protection and reaffirmation.',
    reflection:
      'Notice how the Kalima lists not only theological sins (disbelief, polytheism) but social and moral ones — backbiting, tale-carrying, slander. Islam does not separate spiritual health from how we treat people. A person who prays and fasts but destroys reputations with their tongue has not truly submitted. This Kalima is a reminder that full Islam is a package: the inward declaration of tawhid must be matched by outward care for truth, justice, and the dignity of others.',
    sources: [
      { type: 'Hadith', ref: 'Musnad Ahmad 19606', authenticity: 'Authentic (Hasan)' },
      { type: 'Reference', ref: 'Taught as foundational knowledge across all major madhabs', authenticity: 'Established practice' },
    ],
    guidance:
      'Recite in the morning as a daily renewal of your commitment and as a shield against the subtle corruptions that erode faith over time. It is especially powerful after moments of spiritual weakness or after you have noticed yourself slipping in speech or conduct.',
  },
}

export const allDuas: Dua[] = Object.values(duasData)

export function getDua(slug: string): Dua | null {
  return duasData[slug] ?? null
}
