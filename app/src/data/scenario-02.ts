import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  { id: 's02-001', hanzi: '捷運', pinyin: 'jié yùn', indonesian: 'MRT / metro', english: 'MRT (Taipei Metro)', pos: 'noun', register: 'casual', scenario: 2, taiwan_note: 'Used in Taiwan; mainland says 地鐵' },
  { id: 's02-002', hanzi: '公車', pinyin: 'gōng chē', indonesian: 'bus kota', english: 'city bus', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-003', hanzi: '計程車', pinyin: 'jì chéng chē', indonesian: 'taksi', english: 'taxi', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-004', hanzi: '機車', pinyin: 'jī chē', indonesian: 'motor / skuter', english: 'scooter / motorbike', pos: 'noun', register: 'casual', scenario: 2, taiwan_note: 'In Taiwan 機車 means scooter, not a bad word like in slang' },
  { id: 's02-005', hanzi: '腳踏車', pinyin: 'jiǎo tà chē', indonesian: 'sepeda', english: 'bicycle', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-006', hanzi: '高鐵', pinyin: 'gāo tiě', indonesian: 'kereta cepat (HSR)', english: 'High Speed Rail', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-007', hanzi: '台鐵', pinyin: 'Tái Tiě', indonesian: 'kereta Taiwan (TRA)', english: 'Taiwan Railways', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-008', hanzi: '車站', pinyin: 'chē zhàn', indonesian: 'stasiun', english: 'station', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-009', hanzi: '月台', pinyin: 'yuè tái', indonesian: 'peron', english: 'platform', pos: 'noun', register: 'casual', scenario: 2 },

  // Directions
  { id: 's02-020', hanzi: '請問，⋯⋯怎麼走？', pinyin: 'qǐng wèn, ...zěn me zǒu?', indonesian: 'Permisi, bagaimana cara ke ...?', english: 'Excuse me, how do I get to ...?', pos: 'phrase', register: 'casual', scenario: 2 },
  { id: 's02-021', hanzi: '直走', pinyin: 'zhí zǒu', indonesian: 'jalan lurus', english: 'go straight', pos: 'phrase', register: 'casual', scenario: 2 },
  { id: 's02-022', hanzi: '左轉', pinyin: 'zuǒ zhuǎn', indonesian: 'belok kiri', english: 'turn left', pos: 'phrase', register: 'casual', scenario: 2 },
  { id: 's02-023', hanzi: '右轉', pinyin: 'yòu zhuǎn', indonesian: 'belok kanan', english: 'turn right', pos: 'phrase', register: 'casual', scenario: 2 },
  { id: 's02-024', hanzi: '紅綠燈', pinyin: 'hóng lǜ dēng', indonesian: 'lampu merah', english: 'traffic light', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-025', hanzi: '斑馬線', pinyin: 'bān mǎ xiàn', indonesian: 'zebra cross', english: 'crosswalk', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-026', hanzi: '附近', pinyin: 'fù jìn', indonesian: 'di dekat sini / sekitar sini', english: 'nearby', pos: 'adverb', register: 'casual', scenario: 2 },
  { id: 's02-027', hanzi: '遠', pinyin: 'yuǎn', indonesian: 'jauh', english: 'far', pos: 'adjective', register: 'casual', scenario: 2 },
  { id: 's02-028', hanzi: '近', pinyin: 'jìn', indonesian: 'dekat', english: 'near', pos: 'adjective', register: 'casual', scenario: 2 },
  { id: 's02-029', hanzi: '走路幾分鐘？', pinyin: 'zǒu lù jǐ fēn zhōng?', indonesian: 'jalan kaki berapa menit?', english: 'how many minutes walking?', pos: 'phrase', register: 'casual', scenario: 2 },

  // MRT specific
  { id: 's02-030', hanzi: '悠遊卡', pinyin: 'Yōuyóu Kǎ', indonesian: 'kartu EasyCard', english: 'EasyCard (transit card)', pos: 'noun', register: 'casual', scenario: 2, taiwan_note: 'Tap-and-go card used on MRT, buses, convenience stores' },
  { id: 's02-031', hanzi: '儲值', pinyin: 'chǔ zhí', indonesian: 'isi ulang (kartu)', english: 'top up (card)', pos: 'verb', register: 'casual', scenario: 2 },
  { id: 's02-032', hanzi: '出口', pinyin: 'chū kǒu', indonesian: 'pintu keluar', english: 'exit', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-033', hanzi: '入口', pinyin: 'rù kǒu', indonesian: 'pintu masuk', english: 'entrance', pos: 'noun', register: 'casual', scenario: 2 },
  { id: 's02-034', hanzi: '換乘', pinyin: 'huàn chéng', indonesian: 'ganti jalur / transit', english: 'transfer (transit)', pos: 'verb', register: 'casual', scenario: 2 },
  { id: 's02-035', hanzi: '幾號出口？', pinyin: 'jǐ hào chū kǒu?', indonesian: 'pintu keluar nomor berapa?', english: 'which exit number?', pos: 'phrase', register: 'casual', scenario: 2 },

  // Taxi
  { id: 's02-040', hanzi: '到⋯⋯多少錢？', pinyin: 'dào ... duō shǎo qián?', indonesian: 'ke ... berapa?', english: 'how much to ...?', pos: 'phrase', register: 'casual', scenario: 2 },
  { id: 's02-041', hanzi: '到這個地址', pinyin: 'dào zhè gè dì zhǐ', indonesian: 'ke alamat ini', english: 'to this address', pos: 'phrase', register: 'casual', scenario: 2 },
  { id: 's02-042', hanzi: '在這裡停', pinyin: 'zài zhè lǐ tíng', indonesian: 'berhenti di sini', english: 'stop here', pos: 'phrase', register: 'casual', scenario: 2 },
  { id: 's02-043', hanzi: '開收據', pinyin: 'kāi shōu jù', indonesian: 'minta kwitansi', english: 'give me a receipt', pos: 'phrase', register: 'casual', scenario: 2 },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd02-01',
    scenario: 2,
    title: 'Tanya arah ke stasiun MRT',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，請問捷運站怎麼走？', pinyin: 'Bù hǎo yì si, qǐng wèn jié yùn zhàn zěn me zǒu?', indonesian: 'Permisi, bagaimana cara ke stasiun MRT?' },
      { speaker: 'Orang', hanzi: '直走，然後左轉，大概走五分鐘。', pinyin: 'Zhí zǒu, rán hòu zuǒ zhuǎn, dà gài zǒu wǔ fēn zhōng.', indonesian: 'Jalan lurus, lalu belok kiri, kira-kira lima menit jalan kaki.' },
      { speaker: 'Kamu', hanzi: '謝謝你！', pinyin: 'Xiè xiè nǐ!', indonesian: 'Terima kasih!' },
    ],
  },
  {
    id: 'd02-02',
    scenario: 2,
    title: 'Naik taksi',
    lines: [
      { speaker: 'Kamu', hanzi: '到台北車站，多少錢？', pinyin: 'Dào Táiběi Chēzhàn, duō shǎo qián?', indonesian: 'Ke Stasiun Taipei, berapa?' },
      { speaker: 'Supir', hanzi: '大概兩百元左右。', pinyin: 'Dà gài liǎng bǎi yuán zuǒ yòu.', indonesian: 'Kira-kira sekitar dua ratus dolar.' },
      { speaker: 'Kamu', hanzi: '好，走吧。', pinyin: 'Hǎo, zǒu ba.', indonesian: 'Oke, berangkat.' },
      { speaker: 'Kamu', hanzi: '（tiba）在這裡停，謝謝。', pinyin: 'Zài zhè lǐ tíng, xiè xiè.', indonesian: 'Berhenti di sini, terima kasih.' },
    ],
  },
  {
    id: 'd02-03',
    scenario: 2,
    title: 'Beli tiket kereta HSR',
    lines: [
      { speaker: 'Kamu', hanzi: '我要買一張到台中的高鐵票。', pinyin: 'Wǒ yào mǎi yī zhāng dào Táizhōng de gāotiě piào.', indonesian: 'Saya mau beli satu tiket HSR ke Taichung.' },
      { speaker: 'Staf', hanzi: '請問要哪一班？', pinyin: 'Qǐng wèn yào nǎ yī bān?', indonesian: 'Mau jadwal yang mana?' },
      { speaker: 'Kamu', hanzi: '最近的班次，謝謝。', pinyin: 'Zuì jìn de bāncì, xiè xiè.', indonesian: 'Jadwal yang paling dekat, terima kasih.' },
      { speaker: 'Staf', hanzi: '下一班是兩點十分，票價七百元。', pinyin: 'Xià yī bān shì liǎng diǎn shí fēn, piào jià qī bǎi yuán.', indonesian: 'Jadwal berikutnya pukul 14.10, harga tiket tujuh ratus dolar.' },
      { speaker: 'Kamu', hanzi: '好，刷卡可以嗎？', pinyin: 'Hǎo, shuā kǎ kěyǐ ma?', indonesian: 'Oke, bisa bayar kartu?' },
    ],
  },
  {
    id: 'd02-04',
    scenario: 2,
    title: 'Naik MRT — minta bantuan',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，請問這班車有到士林嗎？', pinyin: 'Bù hǎo yì si, qǐng wèn zhè bān chē yǒu dào Shìlín ma?', indonesian: 'Permisi, kereta ini sampai ke Shilin?' },
      { speaker: 'Penumpang', hanzi: '有，你在士林站下車就好了。', pinyin: 'Yǒu, nǐ zài Shìlín zhàn xià chē jiù hǎo le.', indonesian: 'Ada, kamu turun di Stasiun Shilin saja.' },
      { speaker: 'Kamu', hanzi: '幾站？', pinyin: 'Jǐ zhàn?', indonesian: 'Berapa stasiun?' },
      { speaker: 'Penumpang', hanzi: '還有三站。', pinyin: 'Hái yǒu sān zhàn.', indonesian: 'Masih tiga stasiun lagi.' },
      { speaker: 'Kamu', hanzi: '謝謝你！', pinyin: 'Xiè xiè nǐ!', indonesian: 'Terima kasih!' },
    ],
  },
  {
    id: 'd02-05',
    scenario: 2,
    title: 'Isi ulang EasyCard',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，悠遊卡要在哪裡儲值？', pinyin: 'Bù hǎo yì si, Yōuyóu kǎ yào zài nǎlǐ chǔzhí?', indonesian: 'Permisi, EasyCard isi ulangnya di mana?' },
      { speaker: 'Staf', hanzi: '在便利商店或捷運站的機器都可以。', pinyin: 'Zài biànlì shāngdiàn huò jiéyùn zhàn de jīqì dōu kěyǐ.', indonesian: 'Di minimarket atau mesin di stasiun MRT bisa semua.' },
      { speaker: 'Kamu', hanzi: '謝謝，我去7-11儲值。', pinyin: 'Xiè xiè, wǒ qù 7-11 chǔzhí.', indonesian: 'Terima kasih, saya isi ulang di 7-Eleven.' },
    ],
  },
]
