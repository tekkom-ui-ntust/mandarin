import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // --- Halal food ---
  { id: 's13-001', hanzi: '清真', pinyin: 'qīngzhēn', indonesian: 'halal / Islami', english: 'halal / Islamic', pos: 'adjective', register: 'casual', scenario: 13, taiwan_note: '清真 is the Mandarin term for halal — look for 清真認證 on packaging' },
  { id: 's13-002', hanzi: '清真認證', pinyin: 'qīngzhēn rènzhèng', indonesian: 'sertifikasi halal', english: 'halal certification', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-003', hanzi: '清真食品', pinyin: 'qīngzhēn shípǐn', indonesian: 'makanan halal', english: 'halal food', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-004', hanzi: '清真餐廳', pinyin: 'qīngzhēn cāntīng', indonesian: 'restoran halal', english: 'halal restaurant', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-005', hanzi: '這個是清真的嗎？', pinyin: 'zhège shì qīngzhēn de ma?', indonesian: 'yang ini halal?', english: 'is this halal?', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-006', hanzi: '有沒有清真認證？', pinyin: 'yǒu méiyǒu qīngzhēn rènzhèng?', indonesian: 'ada sertifikasi halal?', english: 'is there a halal certification?', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-007', hanzi: '我不吃豬肉', pinyin: 'wǒ bù chī zhūròu', indonesian: 'saya tidak makan babi', english: 'I don\'t eat pork', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-008', hanzi: '豬肉', pinyin: 'zhūròu', indonesian: 'daging babi', english: 'pork', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-009', hanzi: '豬油', pinyin: 'zhūyóu', indonesian: 'lemak babi / lard', english: 'lard / pork fat', pos: 'noun', register: 'casual', scenario: 13, taiwan_note: '豬油 is used in many Taiwanese dishes — important to ask' },
  { id: 's13-010', hanzi: '有沒有加豬油？', pinyin: 'yǒu méiyǒu jiā zhūyóu?', indonesian: 'ada tambahan lemak babi?', english: 'does it contain lard?', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-011', hanzi: '這個有豬肉成分嗎？', pinyin: 'zhège yǒu zhūròu chéngfèn ma?', indonesian: 'yang ini mengandung babi?', english: 'does this contain pork?', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-012', hanzi: '我不喝酒', pinyin: 'wǒ bù hē jiǔ', indonesian: 'saya tidak minum alkohol', english: 'I don\'t drink alcohol', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-013', hanzi: '酒精', pinyin: 'jiǔjīng', indonesian: 'alkohol', english: 'alcohol', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-014', hanzi: '有沒有含酒精？', pinyin: 'yǒu méiyǒu hán jiǔjīng?', indonesian: 'mengandung alkohol?', english: 'does this contain alcohol?', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-015', hanzi: '牛肉', pinyin: 'niúròu', indonesian: 'daging sapi', english: 'beef', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-016', hanzi: '雞肉', pinyin: 'jīròu', indonesian: 'daging ayam', english: 'chicken', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-017', hanzi: '羊肉', pinyin: 'yángròu', indonesian: 'daging kambing / domba', english: 'lamb / mutton', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-018', hanzi: '海鮮', pinyin: 'hǎixiān', indonesian: 'makanan laut / seafood', english: 'seafood', pos: 'noun', register: 'casual', scenario: 13 },

  // --- Prayer & mosque ---
  { id: 's13-020', hanzi: '清真寺', pinyin: 'qīngzhēn sì', indonesian: 'masjid', english: 'mosque', pos: 'noun', register: 'casual', scenario: 13, taiwan_note: 'The main mosque in Taipei is 台北清真寺 (Taipei Grand Mosque) in Da\'an District' },
  { id: 's13-021', hanzi: '禮拜', pinyin: 'lǐbài', indonesian: 'shalat / ibadah', english: 'prayer / worship', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-022', hanzi: '禱告', pinyin: 'dǎogào', indonesian: 'berdoa', english: 'to pray', pos: 'verb', register: 'casual', scenario: 13 },
  { id: 's13-023', hanzi: '我需要去禮拜', pinyin: 'wǒ xūyào qù lǐbài', indonesian: 'saya perlu pergi shalat', english: 'I need to go pray', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-024', hanzi: '祈禱室', pinyin: 'qídǎo shì', indonesian: 'ruang doa / mushola', english: 'prayer room', pos: 'noun', register: 'casual', scenario: 13, taiwan_note: 'Some malls and airports in Taiwan have prayer rooms — ask 有沒有祈禱室？' },
  { id: 's13-025', hanzi: '有沒有祈禱室？', pinyin: 'yǒu méiyǒu qídǎo shì?', indonesian: 'ada ruang shalat / mushola?', english: 'is there a prayer room?', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-026', hanzi: '齋戒', pinyin: 'zhāijiè', indonesian: 'puasa (Ramadan)', english: 'fasting (Ramadan)', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-027', hanzi: '齋月', pinyin: 'zhāiyuè', indonesian: 'bulan Ramadan', english: 'Ramadan month', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-028', hanzi: '我在齋戒', pinyin: 'wǒ zài zhāijiè', indonesian: 'saya sedang berpuasa', english: 'I am fasting', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-029', hanzi: '開齋', pinyin: 'kāizhāi', indonesian: 'berbuka puasa', english: 'break the fast (iftar)', pos: 'verb', register: 'casual', scenario: 13 },

  // --- Islamic greetings ---
  { id: 's13-030', hanzi: '穆斯林', pinyin: 'Mùsīlín', indonesian: 'Muslim', english: 'Muslim', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-031', hanzi: '伊斯蘭教', pinyin: 'Yīsīlán jiào', indonesian: 'agama Islam', english: 'Islam', pos: 'noun', register: 'casual', scenario: 13 },
  { id: 's13-032', hanzi: '我是穆斯林', pinyin: 'wǒ shì Mùsīlín', indonesian: 'saya Muslim', english: 'I am Muslim', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-033', hanzi: '你們這裡有清真食品嗎？', pinyin: 'nǐmen zhèlǐ yǒu qīngzhēn shípǐn ma?', indonesian: 'di sini ada makanan halal?', english: 'do you have halal food here?', pos: 'phrase', register: 'casual', scenario: 13 },

  // --- Useful when explaining to locals ---
  { id: 's13-040', hanzi: '宗教飲食限制', pinyin: 'zōngjiào yǐnshí xiànzhì', indonesian: 'pantangan makan agama', english: 'religious dietary restriction', pos: 'noun', register: 'formal', scenario: 13 },
  { id: 's13-041', hanzi: '因為宗教關係，我不能吃⋯⋯', pinyin: 'yīnwèi zōngjiào guānxi, wǒ bù néng chī...', indonesian: 'karena alasan agama, saya tidak bisa makan ...', english: 'due to religious reasons, I can\'t eat ...', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-042', hanzi: '謝謝你的理解', pinyin: 'xiè xiè nǐ de lǐjiě', indonesian: 'terima kasih atas pengertianmu', english: 'thank you for understanding', pos: 'phrase', register: 'casual', scenario: 13 },
  { id: 's13-043', hanzi: '這附近有清真餐廳嗎？', pinyin: 'zhè fùjìn yǒu qīngzhēn cāntīng ma?', indonesian: 'di sekitar sini ada restoran halal?', english: 'is there a halal restaurant nearby?', pos: 'phrase', register: 'casual', scenario: 13 },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd13-01',
    scenario: 13,
    title: 'Tanya apakah makanan halal',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，請問這個是清真的嗎？', pinyin: 'Bù hǎo yìsi, qǐng wèn zhège shì qīngzhēn de ma?', indonesian: 'Permisi, yang ini halal?' },
      { speaker: 'Pelayan', hanzi: '請問你的意思是⋯⋯不含豬肉？', pinyin: 'Qǐng wèn nǐ de yìsi shì... bù hán zhūròu?', indonesian: 'Maksudnya... tidak mengandung babi?' },
      { speaker: 'Kamu', hanzi: '對，我不吃豬肉，也不喝酒。有沒有清真認證？', pinyin: 'Duì, wǒ bù chī zhūròu, yě bù hē jiǔ. Yǒu méiyǒu qīngzhēn rènzhèng?', indonesian: 'Ya, saya tidak makan babi dan tidak minum alkohol. Ada sertifikasi halal?' },
      { speaker: 'Pelayan', hanzi: '我們這邊沒有清真認證，但這道菜是雞肉，沒有加豬油。', pinyin: 'Wǒmen zhèbiān méiyǒu qīngzhēn rènzhèng, dàn zhè dào cài shì jīròu, méiyǒu jiā zhūyóu.', indonesian: 'Kami tidak punya sertifikasi halal, tapi menu ini ayam dan tidak pakai lemak babi.' },
      { speaker: 'Kamu', hanzi: '謝謝你告訴我。', pinyin: 'Xiè xiè nǐ gàosù wǒ.', indonesian: 'Terima kasih sudah memberitahu saya.' },
    ],
  },
  {
    id: 'd13-02',
    scenario: 13,
    title: 'Cari restoran halal terdekat',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，這附近有清真餐廳嗎？', pinyin: 'Bù hǎo yìsi, zhè fùjìn yǒu qīngzhēn cāntīng ma?', indonesian: 'Permisi, di sekitar sini ada restoran halal?' },
      { speaker: 'Orang', hanzi: '你可以用Google地圖搜尋「清真餐廳」，台北大安區有台北清真寺，附近有幾家清真餐廳。', pinyin: 'Nǐ kěyǐ yòng Google Dìtú sōuxún "qīngzhēn cāntīng", Táiběi Dà\'ān qū yǒu Táiběi Qīngzhēnsì, fùjìn yǒu jǐ jiā qīngzhēn cāntīng.', indonesian: 'Kamu bisa cari "清真餐廳" di Google Maps, di Distrik Da\'an Taipei ada Masjid Taipei, di dekatnya ada beberapa restoran halal.' },
      { speaker: 'Kamu', hanzi: '謝謝，我去找找看！', pinyin: 'Xiè xiè, wǒ qù zhǎo zhǎo kàn!', indonesian: 'Terima kasih, saya pergi cari!' },
    ],
  },
  {
    id: 'd13-03',
    scenario: 13,
    title: 'Minta ruang shalat',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，請問這裡有沒有祈禱室？', pinyin: 'Bù hǎo yìsi, qǐng wèn zhèlǐ yǒu méiyǒu qídǎo shì?', indonesian: 'Permisi, di sini ada ruang shalat?' },
      { speaker: 'Staf', hanzi: '有的，在三樓，電梯旁邊。', pinyin: 'Yǒu de, zài sān lóu, diàntī pángbiān.', indonesian: 'Ada, di lantai tiga, di sebelah lift.' },
      { speaker: 'Kamu', hanzi: '非常感謝！', pinyin: 'Fēicháng gǎnxiè!', indonesian: 'Terima kasih banyak!' },
    ],
  },
  {
    id: 'd13-04',
    scenario: 13,
    title: 'Jelaskan sedang puasa',
    lines: [
      { speaker: 'Teman', hanzi: '你要不要一起吃飯？', pinyin: 'Nǐ yào bú yào yīqǐ chīfàn?', indonesian: 'Mau makan bersama?' },
      { speaker: 'Kamu', hanzi: '謝謝，我現在在齋戒，不能吃東西。', pinyin: 'Xiè xiè, wǒ xiànzài zài zhāijiè, bù néng chī dōngxi.', indonesian: 'Terima kasih, saya sekarang sedang puasa, tidak bisa makan.' },
      { speaker: 'Teman', hanzi: '哦，是齋月嗎？那你幾點開齋？', pinyin: 'Ò, shì zhāiyuè ma? Nà nǐ jǐ diǎn kāizhāi?', indonesian: 'Oh, bulan Ramadan? Kalau begitu kamu berbuka jam berapa?' },
      { speaker: 'Kamu', hanzi: '大概晚上七點左右，到時候我們一起吃吧！', pinyin: 'Dàgài wǎnshàng qī diǎn zuǒyòu, dào shíhòu wǒmen yīqǐ chī ba!', indonesian: 'Kira-kira sekitar jam tujuh malam, nanti kita makan bersama!' },
    ],
  },
  {
    id: 'd13-05',
    scenario: 13,
    title: 'Tanya kandungan babi di makanan kemasan',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，這個有沒有含豬肉成分？', pinyin: 'Bù hǎo yìsi, zhège yǒu méiyǒu hán zhūròu chéngfèn?', indonesian: 'Permisi, ini ada kandungan babi?' },
      { speaker: 'Staf', hanzi: '讓我看一下成分表⋯⋯這個有豬油，你不能吃嗎？', pinyin: 'Ràng wǒ kàn yīxià chéngfèn biǎo... zhège yǒu zhūyóu, nǐ bù néng chī ma?', indonesian: 'Biar saya lihat daftar bahan... ini ada lemak babi, kamu tidak bisa makan?' },
      { speaker: 'Kamu', hanzi: '對，因為宗教關係我不能吃豬肉和豬油。有沒有其他選擇？', pinyin: 'Duì, yīnwèi zōngjiào guānxi wǒ bù néng chī zhūròu hé zhūyóu. Yǒu méiyǒu qítā xuǎnzé?', indonesian: 'Ya, karena alasan agama saya tidak bisa makan babi dan lemak babi. Ada pilihan lain?' },
      { speaker: 'Staf', hanzi: '這個雞肉口味的沒有豬肉成分，你可以試試看。', pinyin: 'Zhège jīròu kǒuwèi de méiyǒu zhūròu chéngfèn, nǐ kěyǐ shì shì kàn.', indonesian: 'Yang rasa ayam ini tidak ada kandungan babi, kamu bisa coba.' },
    ],
  },
]
