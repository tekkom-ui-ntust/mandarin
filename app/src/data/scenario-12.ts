import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // --- Core bargaining ---
  { id: 's12-001', hanzi: '多少錢？', pinyin: 'duōshǎo qián?', indonesian: 'berapa harganya?', english: 'how much?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-002', hanzi: '太貴了', pinyin: 'tài guì le', indonesian: 'terlalu mahal', english: 'too expensive', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-003', hanzi: '可以便宜一點嗎？', pinyin: 'kěyǐ piányí yīdiǎn ma?', indonesian: 'bisa lebih murah sedikit?', english: 'can you make it cheaper?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-004', hanzi: '算我便宜一點', pinyin: 'suàn wǒ piányí yīdiǎn', indonesian: 'hitung lebih murah buat saya', english: 'give me a better price', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-005', hanzi: '打折嗎？', pinyin: 'dǎzhé ma?', indonesian: 'ada diskon?', english: 'any discount?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-006', hanzi: '最低多少？', pinyin: 'zuì dī duōshǎo?', indonesian: 'paling murah berapa?', english: 'what\'s the lowest price?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-007', hanzi: '⋯⋯元可以嗎？', pinyin: '... yuán kěyǐ ma?', indonesian: '... dolar boleh?', english: 'can you do ... dollars?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-008', hanzi: '我出⋯⋯元', pinyin: 'wǒ chū ... yuán', indonesian: 'saya tawar ... dolar', english: 'I\'ll offer ... dollars', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-009', hanzi: '這個價錢我不能再低了', pinyin: 'zhège jiàqián wǒ bù néng zài dī le', indonesian: 'harga ini sudah tidak bisa lebih murah lagi', english: 'this is the lowest I can go', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-010', hanzi: '好，成交！', pinyin: 'hǎo, chéngjīao!', indonesian: 'oke, deal!', english: 'okay, deal!', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-011', hanzi: '算了，不買了', pinyin: 'suànle, bù mǎi le', indonesian: 'sudahlah, tidak jadi beli', english: 'forget it, I won\'t buy it', pos: 'phrase', register: 'casual', scenario: 12, taiwan_note: 'Pretending to walk away is a classic bargaining move at markets' },
  { id: 's12-012', hanzi: '我再想想', pinyin: 'wǒ zài xiǎngxiǎng', indonesian: 'saya pikir-pikir dulu', english: 'let me think about it', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-013', hanzi: '我去別家看看', pinyin: 'wǒ qù bié jiā kànkàn', indonesian: 'saya lihat-lihat ke toko lain dulu', english: 'I\'ll look at other shops', pos: 'phrase', register: 'casual', scenario: 12 },

  // --- Price vocabulary ---
  { id: 's12-020', hanzi: '定價', pinyin: 'dìngjià', indonesian: 'harga tetap / harga pasaran', english: 'fixed price / list price', pos: 'noun', register: 'casual', scenario: 12 },
  { id: 's12-021', hanzi: '開價', pinyin: 'kāijià', indonesian: 'harga awal (sebelum tawar)', english: 'asking price', pos: 'noun', register: 'casual', scenario: 12 },
  { id: 's12-022', hanzi: '殺價', pinyin: 'shājià', indonesian: 'tawar harga / negosiasi harga', english: 'to bargain / haggle', pos: 'verb', register: 'casual', scenario: 12, taiwan_note: '殺價 is normal at night markets and traditional markets, not at chain stores' },
  { id: 's12-023', hanzi: '不二價', pinyin: 'bù èr jià', indonesian: 'harga mati / tidak bisa ditawar', english: 'fixed price, no bargaining', pos: 'phrase', register: 'casual', scenario: 12, taiwan_note: 'Signs saying 不二價 mean the price is final — don\'t try bargaining' },
  { id: 's12-024', hanzi: '有標價嗎？', pinyin: 'yǒu biāojià ma?', indonesian: 'ada label harganya?', english: 'is there a price tag?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-025', hanzi: '含稅嗎？', pinyin: 'hán shuì ma?', indonesian: 'sudah termasuk pajak?', english: 'does that include tax?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-026', hanzi: '整數', pinyin: 'zhěngshù', indonesian: 'angka bulat', english: 'round number', pos: 'noun', register: 'casual', scenario: 12 },
  { id: 's12-027', hanzi: '算整數', pinyin: 'suàn zhěngshù', indonesian: 'dibulatkan saja', english: 'just round it up/down', pos: 'phrase', register: 'casual', scenario: 12, taiwan_note: 'e.g. 195元 → 算整數 → 200元 or 190元' },

  // --- Buying multiple items ---
  { id: 's12-030', hanzi: '買多一點可以打折嗎？', pinyin: 'mǎi duō yīdiǎn kěyǐ dǎzhé ma?', indonesian: 'kalau beli lebih banyak bisa diskon?', english: 'discount if I buy more?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-031', hanzi: '買兩個算多少？', pinyin: 'mǎi liǎng gè suàn duōshǎo?', indonesian: 'kalau beli dua harganya berapa?', english: 'how much for two?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-032', hanzi: '買三送一', pinyin: 'mǎi sān sòng yī', indonesian: 'beli tiga gratis satu', english: 'buy 3 get 1 free', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-033', hanzi: '一起算', pinyin: 'yīqǐ suàn', indonesian: 'dihitung sekaligus / bundle', english: 'count it all together', pos: 'phrase', register: 'casual', scenario: 12 },

  // --- Condition / quality check ---
  { id: 's12-040', hanzi: '有沒有瑕疵？', pinyin: 'yǒu méiyǒu xiácī?', indonesian: 'ada cacat / rusak tidak?', english: 'any defects?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-041', hanzi: '這個有一點壞掉', pinyin: 'zhège yǒu yīdiǎn huài diào', indonesian: 'yang ini ada sedikit cacat', english: 'this one is slightly damaged', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-042', hanzi: '因為有瑕疵，可以再便宜嗎？', pinyin: 'yīnwèi yǒu xiácī, kěyǐ zài piányí ma?', indonesian: 'karena ada cacat, bisa lebih murah lagi?', english: 'because of the defect, can you lower the price?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-043', hanzi: '有沒有新的？', pinyin: 'yǒu méiyǒu xīn de?', indonesian: 'ada yang baru?', english: 'do you have a new one?', pos: 'phrase', register: 'casual', scenario: 12 },
  { id: 's12-044', hanzi: '這是最後一個了', pinyin: 'zhè shì zuìhòu yī gè le', indonesian: 'ini yang terakhir', english: 'this is the last one', pos: 'phrase', register: 'casual', scenario: 12 },

  // --- Context: where bargaining works in Taiwan ---
  { id: 's12-050', hanzi: '夜市', pinyin: 'yèshì', indonesian: 'pasar malam (boleh tawar)', english: 'night market (bargaining OK)', pos: 'noun', register: 'casual', scenario: 12, taiwan_note: 'Bargaining is common and expected at night markets' },
  { id: 's12-051', hanzi: '傳統市場', pinyin: 'chuántǒng shìchǎng', indonesian: 'pasar tradisional', english: 'traditional market', pos: 'noun', register: 'casual', scenario: 12, taiwan_note: 'Wet markets / morning markets — bargaining is acceptable' },
  { id: 's12-052', hanzi: '連鎖店', pinyin: 'liánsuǒ diàn', indonesian: 'toko jaringan / chain store', english: 'chain store', pos: 'noun', register: 'casual', scenario: 12, taiwan_note: 'Chain stores like 全聯, 7-11 have fixed prices — no bargaining' },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd12-01',
    scenario: 12,
    title: 'Tawar di pasar malam',
    lines: [
      { speaker: 'Kamu', hanzi: '老闆，這個多少錢？', pinyin: 'Lǎobǎn, zhège duōshǎo qián?', indonesian: 'Bos, yang ini berapa harganya?' },
      { speaker: 'Penjual', hanzi: '三百五十元。', pinyin: 'Sānbǎi wǔshí yuán.', indonesian: 'Tiga ratus lima puluh dolar.' },
      { speaker: 'Kamu', hanzi: '太貴了，可以便宜一點嗎？', pinyin: 'Tài guì le, kěyǐ piányí yīdiǎn ma?', indonesian: 'Terlalu mahal, bisa lebih murah sedikit?' },
      { speaker: 'Penjual', hanzi: '那就三百，這已經很便宜了。', pinyin: 'Nà jiù sānbǎi, zhè yǐjīng hěn piányí le.', indonesian: 'Kalau begitu tiga ratus, ini sudah sangat murah.' },
      { speaker: 'Kamu', hanzi: '兩百八十可以嗎？', pinyin: 'Liǎngbǎi bāshí kěyǐ ma?', indonesian: 'Dua ratus delapan puluh boleh?' },
      { speaker: 'Penjual', hanzi: '好啦，算你兩百九十。', pinyin: 'Hǎo la, suàn nǐ liǎngbǎi jiǔshí.', indonesian: 'Baiklah, untuk kamu dua ratus sembilan puluh.' },
      { speaker: 'Kamu', hanzi: '好，成交！', pinyin: 'Hǎo, chéngjīao!', indonesian: 'Oke, deal!' },
    ],
  },
  {
    id: 'd12-02',
    scenario: 12,
    title: 'Penjual tidak mau turun harga',
    lines: [
      { speaker: 'Kamu', hanzi: '這個最低多少？', pinyin: 'Zhège zuì dī duōshǎo?', indonesian: 'Yang ini paling murah berapa?' },
      { speaker: 'Penjual', hanzi: '這個不二價，一千兩百元。', pinyin: 'Zhège bù èr jià, yīqiān liǎngbǎi yuán.', indonesian: 'Ini harga mati, seribu dua ratus dolar.' },
      { speaker: 'Kamu', hanzi: '那我再考慮一下。', pinyin: 'Nà wǒ zài kǎolǜ yīxià.', indonesian: 'Kalau begitu saya pikir-pikir dulu.' },
      { speaker: 'Penjual', hanzi: '好，你再想想，這個品質很好的。', pinyin: 'Hǎo, nǐ zài xiǎngxiǎng, zhège pǐnzhí hěn hǎo de.', indonesian: 'Baik, kamu pikir-pikir dulu, kualitas ini sangat bagus.' },
    ],
  },
  {
    id: 'd12-03',
    scenario: 12,
    title: 'Beli banyak minta diskon',
    lines: [
      { speaker: 'Kamu', hanzi: '這個一個多少錢？', pinyin: 'Zhège yī gè duōshǎo qián?', indonesian: 'Yang ini satu berapa?' },
      { speaker: 'Penjual', hanzi: '一個一百元。', pinyin: 'Yī gè yībǎi yuán.', indonesian: 'Satu seratus dolar.' },
      { speaker: 'Kamu', hanzi: '買三個可以打折嗎？', pinyin: 'Mǎi sān gè kěyǐ dǎzhé ma?', indonesian: 'Kalau beli tiga bisa diskon?' },
      { speaker: 'Penjual', hanzi: '三個的話算你兩百五，省了五十！', pinyin: 'Sān gè dehuà suàn nǐ liǎngbǎi wǔ, shěng le wǔshí!', indonesian: 'Kalau tiga saya hitung dua ratus lima puluh, hemat lima puluh!' },
      { speaker: 'Kamu', hanzi: '好，買三個。謝謝老闆！', pinyin: 'Hǎo, mǎi sān gè. Xiè xiè lǎobǎn!', indonesian: 'Oke, beli tiga. Terima kasih bos!' },
    ],
  },
  {
    id: 'd12-04',
    scenario: 12,
    title: 'Ada cacat — minta harga lebih murah',
    lines: [
      { speaker: 'Kamu', hanzi: '老闆，這個有一點瑕疵，可以算便宜一點嗎？', pinyin: 'Lǎobǎn, zhège yǒu yīdiǎn xiácī, kěyǐ suàn piányí yīdiǎn ma?', indonesian: 'Bos, yang ini ada sedikit cacat, bisa dihitung lebih murah?' },
      { speaker: 'Penjual', hanzi: '讓我看一下⋯⋯好，打九折，四百五十元。', pinyin: 'Ràng wǒ kàn yīxià... hǎo, dǎ jiǔ zhé, sìbǎi wǔshí yuán.', indonesian: 'Biar saya lihat dulu... oke, diskon 10%, empat ratus lima puluh dolar.' },
      { speaker: 'Kamu', hanzi: '能不能四百整？算整數比較方便。', pinyin: 'Néng bù néng sìbǎi zhěng? Suàn zhěngshù bǐjiào fāngbiàn.', indonesian: 'Bisa tidak empat ratus bulat? Angka bulat lebih praktis.' },
      { speaker: 'Penjual', hanzi: '好啦，就當交個朋友。', pinyin: 'Hǎo la, jiù dāng jiāo gè péngyǒu.', indonesian: 'Baiklah, anggap saja kita berteman.' },
    ],
  },
  {
    id: 'd12-05',
    scenario: 12,
    title: 'Pura-pura pergi — trik klasik',
    lines: [
      { speaker: 'Kamu', hanzi: '這個兩百可以嗎？', pinyin: 'Zhège liǎngbǎi kěyǐ ma?', indonesian: 'Yang ini dua ratus boleh?' },
      { speaker: 'Penjual', hanzi: '不行，成本就要兩百五了。', pinyin: 'Bùxíng, chéngběn jiù yào liǎngbǎi wǔ le.', indonesian: 'Tidak bisa, modalnya saja dua ratus lima puluh.' },
      { speaker: 'Kamu', hanzi: '算了，我去別家看看。（pura-pura mau pergi）', pinyin: 'Suànle, wǒ qù bié jiā kànkàn.', indonesian: 'Sudahlah, saya lihat-lihat ke toko lain. (pura-pura mau pergi)' },
      { speaker: 'Penjual', hanzi: '哎，等一下！兩百二，你拿走！', pinyin: 'Āi, děng yīxià! Liǎngbǎi èr, nǐ ná zǒu!', indonesian: 'Hei, tunggu! Dua ratus dua puluh, ambil saja!' },
      { speaker: 'Kamu', hanzi: '好！成交！', pinyin: 'Hǎo! Chéngjīao!', indonesian: 'Oke! Deal!' },
    ],
  },
]
