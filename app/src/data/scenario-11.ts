import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // --- Asking for nearby places ---
  { id: 's11-001', hanzi: '最近的', pinyin: 'zuì jìn de', indonesian: 'yang paling dekat', english: 'the nearest', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-002', hanzi: '附近有沒有⋯⋯？', pinyin: 'fùjìn yǒu méiyǒu...?', indonesian: 'di dekat sini ada ... tidak?', english: 'is there a ... nearby?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-003', hanzi: '最近的全家在哪裡？', pinyin: 'zuì jìn de Quánjiā zài nǎlǐ?', indonesian: 'FamilyMart terdekat ada di mana?', english: 'where is the nearest FamilyMart?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-004', hanzi: '最近的超商在哪裡？', pinyin: 'zuì jìn de chāoshāng zài nǎlǐ?', indonesian: 'minimarket terdekat di mana?', english: 'where is the nearest convenience store?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-005', hanzi: '最近的提款機在哪裡？', pinyin: 'zuì jìn de tíkuǎnjī zài nǎlǐ?', indonesian: 'ATM terdekat di mana?', english: 'where is the nearest ATM?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-006', hanzi: '最近的捷運站在哪裡？', pinyin: 'zuì jìn de jiéyùn zhàn zài nǎlǐ?', indonesian: 'stasiun MRT terdekat di mana?', english: 'where is the nearest MRT station?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-007', hanzi: '最近的藥局在哪裡？', pinyin: 'zuì jìn de yàojú zài nǎlǐ?', indonesian: 'apotek terdekat di mana?', english: 'where is the nearest pharmacy?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-008', hanzi: '最近的廁所在哪裡？', pinyin: 'zuì jìn de cèsuǒ zài nǎlǐ?', indonesian: 'toilet terdekat di mana?', english: 'where is the nearest toilet?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-009', hanzi: '最近的停車場在哪裡？', pinyin: 'zuì jìn de tíngchēchǎng zài nǎlǐ?', indonesian: 'parkir terdekat di mana?', english: 'where is the nearest parking?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-010', hanzi: '這附近有餐廳嗎？', pinyin: 'zhè fùjìn yǒu cāntīng ma?', indonesian: 'di sekitar sini ada restoran?', english: 'is there a restaurant around here?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-011', hanzi: '這附近有咖啡廳嗎？', pinyin: 'zhè fùjìn yǒu kāfēitīng ma?', indonesian: 'di sekitar sini ada kafe?', english: 'is there a café around here?', pos: 'phrase', register: 'casual', scenario: 11 },

  // --- Directions answers ---
  { id: 's11-020', hanzi: '就在前面', pinyin: 'jiù zài qiánmiàn', indonesian: 'tepat di depan', english: 'right ahead', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-021', hanzi: '就在旁邊', pinyin: 'jiù zài pángbiān', indonesian: 'tepat di sebelah', english: 'right next to it', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-022', hanzi: '就在對面', pinyin: 'jiù zài duìmiàn', indonesian: 'tepat di seberang', english: 'right across', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-023', hanzi: '在⋯⋯旁邊', pinyin: 'zài ... pángbiān', indonesian: 'di sebelah ...', english: 'next to ...', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-024', hanzi: '在⋯⋯對面', pinyin: 'zài ... duìmiàn', indonesian: 'di seberang ...', english: 'across from ...', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-025', hanzi: '在⋯⋯樓上', pinyin: 'zài ... lóu shàng', indonesian: 'di lantai atas ...', english: 'upstairs / on floor ...', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-026', hanzi: '在⋯⋯樓下', pinyin: 'zài ... lóu xià', indonesian: 'di lantai bawah', english: 'downstairs', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-027', hanzi: '走路大概⋯⋯分鐘', pinyin: 'zǒulù dàgài ... fēnzhōng', indonesian: 'jalan kaki kira-kira ... menit', english: 'about ... minutes walk', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-028', hanzi: '很近，走路就到了', pinyin: 'hěn jìn, zǒulù jiù dào le', indonesian: 'sangat dekat, jalan kaki saja sudah sampai', english: 'very close, just walk there', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-029', hanzi: '有點遠，你最好搭車', pinyin: 'yǒudiǎn yuǎn, nǐ zuìhǎo dāchē', indonesian: 'agak jauh, sebaiknya naik kendaraan', english: 'a bit far, better take transport', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-030', hanzi: '我不太清楚', pinyin: 'wǒ bú tài qīngchǔ', indonesian: 'saya kurang tahu', english: 'I\'m not sure', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-031', hanzi: '你可以用Google地圖找', pinyin: 'nǐ kěyǐ yòng Google Dìtú zhǎo', indonesian: 'kamu bisa cari pakai Google Maps', english: 'you can search on Google Maps', pos: 'phrase', register: 'casual', scenario: 11, taiwan_note: 'Very common answer — Google Maps works great in Taiwan' },

  // --- Location vocab ---
  { id: 's11-040', hanzi: '路口', pinyin: 'lùkǒu', indonesian: 'persimpangan jalan', english: 'intersection', pos: 'noun', register: 'casual', scenario: 11 },
  { id: 's11-041', hanzi: '巷子', pinyin: 'xiàngzi', indonesian: 'gang / lorong', english: 'alley / lane', pos: 'noun', register: 'casual', scenario: 11, taiwan_note: 'Taiwan addresses include 巷 (lane) and 弄 (alley) numbers' },
  { id: 's11-042', hanzi: '巷', pinyin: 'xiàng', indonesian: 'gang (dalam alamat)', english: 'lane (in address)', pos: 'noun', register: 'casual', scenario: 11 },
  { id: 's11-043', hanzi: '弄', pinyin: 'nòng', indonesian: 'gang kecil (dalam alamat)', english: 'alley (in address)', pos: 'noun', register: 'casual', scenario: 11 },
  { id: 's11-044', hanzi: '號', pinyin: 'hào', indonesian: 'nomor (dalam alamat)', english: 'number (in address)', pos: 'noun', register: 'casual', scenario: 11 },
  { id: 's11-045', hanzi: '樓', pinyin: 'lóu', indonesian: 'lantai', english: 'floor / storey', pos: 'noun', register: 'casual', scenario: 11 },
  { id: 's11-046', hanzi: '一樓', pinyin: 'yī lóu', indonesian: 'lantai 1 (lantai dasar)', english: 'ground floor', pos: 'noun', register: 'casual', scenario: 11, taiwan_note: 'Taiwan uses 1F for ground floor, same as US system' },
  { id: 's11-047', hanzi: '地下室', pinyin: 'dìxiàshì', indonesian: 'basement', english: 'basement', pos: 'noun', register: 'casual', scenario: 11 },
  { id: 's11-048', hanzi: '電梯', pinyin: 'diàntī', indonesian: 'lift / elevator', english: 'elevator', pos: 'noun', register: 'casual', scenario: 11 },
  { id: 's11-049', hanzi: '樓梯', pinyin: 'lóutī', indonesian: 'tangga', english: 'stairs', pos: 'noun', register: 'casual', scenario: 11 },
  { id: 's11-050', hanzi: '地址', pinyin: 'dìzhǐ', indonesian: 'alamat', english: 'address', pos: 'noun', register: 'casual', scenario: 11 },
  { id: 's11-051', hanzi: '請問這個地址怎麼走？', pinyin: 'qǐng wèn zhège dìzhǐ zěnme zǒu?', indonesian: 'permisi, cara ke alamat ini bagaimana?', english: 'excuse me, how do I get to this address?', pos: 'phrase', register: 'casual', scenario: 11 },
  { id: 's11-052', hanzi: '你可以帶我去嗎？', pinyin: 'nǐ kěyǐ dài wǒ qù ma?', indonesian: 'bisakah kamu antar saya ke sana?', english: 'can you take me there?', pos: 'phrase', register: 'casual', scenario: 11 },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd11-01',
    scenario: 11,
    title: 'Cari FamilyMart terdekat',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，請問這附近有全家嗎？', pinyin: 'Bù hǎo yìsi, qǐng wèn zhè fùjìn yǒu Quánjiā ma?', indonesian: 'Permisi, di dekat sini ada FamilyMart?' },
      { speaker: 'Orang', hanzi: '有喔，就在前面那個路口右轉，走路大概兩分鐘。', pinyin: 'Yǒu o, jiù zài qiánmiàn nàgè lùkǒu yòuzhuǎn, zǒulù dàgài liǎng fēnzhōng.', indonesian: 'Ada, tepat di persimpangan depan belok kanan, jalan kaki kira-kira dua menit.' },
      { speaker: 'Kamu', hanzi: '謝謝！', pinyin: 'Xiè xiè!', indonesian: 'Terima kasih!' },
      { speaker: 'Orang', hanzi: '不客氣。', pinyin: 'Bú kèqì.', indonesian: 'Sama-sama.' },
    ],
  },
  {
    id: 'd11-02',
    scenario: 11,
    title: 'Cari ATM terdekat',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，最近的提款機在哪裡？', pinyin: 'Bù hǎo yìsi, zuì jìn de tíkuǎnjī zài nǎlǐ?', indonesian: 'Permisi, ATM terdekat di mana?' },
      { speaker: 'Orang', hanzi: '超商裡面就有，就在旁邊那家7-11。', pinyin: 'Chāoshāng lǐmiàn jiù yǒu, jiù zài pángbiān nà jiā 7-11.', indonesian: 'Di dalam minimarket ada, di 7-Eleven sebelah sana.' },
      { speaker: 'Kamu', hanzi: '哦，好的。謝謝你！', pinyin: 'Ò, hǎo de. Xiè xiè nǐ!', indonesian: 'Oh, baik. Terima kasih!' },
    ],
  },
  {
    id: 'd11-03',
    scenario: 11,
    title: 'Cari toilet',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，廁所在哪裡？', pinyin: 'Bù hǎo yìsi, cèsuǒ zài nǎlǐ?', indonesian: 'Permisi, toilet di mana?' },
      { speaker: 'Staf', hanzi: '在二樓，搭電梯上去。', pinyin: 'Zài èr lóu, dā diàntī shàng qù.', indonesian: 'Di lantai 2, naik lift.' },
      { speaker: 'Kamu', hanzi: '電梯在哪裡？', pinyin: 'Diàntī zài nǎlǐ?', indonesian: 'Liftnya di mana?' },
      { speaker: 'Staf', hanzi: '往前走，在收銀台旁邊。', pinyin: 'Wǎng qián zǒu, zài shōuyíntái pángbiān.', indonesian: 'Jalan ke depan, di sebelah kasir.' },
    ],
  },
  {
    id: 'd11-04',
    scenario: 11,
    title: 'Tanya arah ke alamat tertentu',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，請問這個地址怎麼走？', pinyin: 'Bù hǎo yìsi, qǐng wèn zhège dìzhǐ zěnme zǒu?', indonesian: 'Permisi, ke alamat ini bagaimana caranya?' },
      { speaker: 'Orang', hanzi: '讓我看一下⋯⋯這個地方我不太清楚。你可以用Google地圖找。', pinyin: 'Ràng wǒ kàn yīxià... zhège dìfāng wǒ bú tài qīngchǔ. Nǐ kěyǐ yòng Google Dìtú zhǎo.', indonesian: 'Biar saya lihat dulu... tempat ini saya kurang tahu. Kamu bisa cari pakai Google Maps.' },
      { speaker: 'Kamu', hanzi: '好，謝謝。', pinyin: 'Hǎo, xiè xiè.', indonesian: 'Baik, terima kasih.' },
    ],
  },
  {
    id: 'd11-05',
    scenario: 11,
    title: 'Tanya restoran terdekat',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，這附近有沒有好吃的餐廳？', pinyin: 'Bù hǎo yìsi, zhè fùjìn yǒu méiyǒu hǎo chī de cāntīng?', indonesian: 'Permisi, di sekitar sini ada restoran yang enak?' },
      { speaker: 'Orang', hanzi: '有啊！往前走一個路口，有一家很不錯的牛肉麵。', pinyin: 'Yǒu a! Wǎng qián zǒu yī gè lùkǒu, yǒu yī jiā hěn búcuò de niúròumiàn.', indonesian: 'Ada! Jalan ke depan satu persimpangan, ada restoran mie sapi yang cukup bagus.' },
      { speaker: 'Kamu', hanzi: '幾點開？', pinyin: 'Jǐ diǎn kāi?', indonesian: 'Bukanya jam berapa?' },
      { speaker: 'Orang', hanzi: '好像十一點開始，你去看看吧！', pinyin: 'Hǎoxiàng shíyī diǎn kāishǐ, nǐ qù kànkàn ba!', indonesian: 'Sepertinya mulai jam sebelas, coba saja pergi lihat!' },
    ],
  },
]
