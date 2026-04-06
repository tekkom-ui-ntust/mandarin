import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // Convenience store
  { id: 's03-001', hanzi: '超商', pinyin: 'chāo shāng', indonesian: 'minimarket / convenience store', english: 'convenience store', pos: 'noun', register: 'casual', scenario: 3, taiwan_note: '7-11 and FamilyMart dominate Taiwan' },
  { id: 's03-002', hanzi: '收銀台', pinyin: 'shōu yín tái', indonesian: 'kasir', english: 'cashier counter', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-003', hanzi: '袋子', pinyin: 'dài zi', indonesian: 'kantong / tas plastik', english: 'bag', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-004', hanzi: '需要袋子嗎？', pinyin: 'xū yào dài zi ma?', indonesian: 'perlu kantong?', english: 'do you need a bag?', pos: 'phrase', register: 'casual', scenario: 3, taiwan_note: 'Plastic bags cost extra in Taiwan' },
  { id: 's03-005', hanzi: '不用了', pinyin: 'bù yòng le', indonesian: 'tidak perlu / tidak usah', english: 'no need', pos: 'phrase', register: 'casual', scenario: 3 },

  // General shopping
  { id: 's03-010', hanzi: '買', pinyin: 'mǎi', indonesian: 'beli', english: 'to buy', pos: 'verb', register: 'casual', scenario: 3 },
  { id: 's03-011', hanzi: '賣', pinyin: 'mài', indonesian: 'jual', english: 'to sell', pos: 'verb', register: 'casual', scenario: 3 },
  { id: 's03-012', hanzi: '多少錢？', pinyin: 'duō shǎo qián?', indonesian: 'berapa harganya?', english: 'how much?', pos: 'phrase', register: 'casual', scenario: 3 },
  { id: 's03-013', hanzi: '太貴了', pinyin: 'tài guì le', indonesian: 'terlalu mahal', english: 'too expensive', pos: 'phrase', register: 'casual', scenario: 3 },
  { id: 's03-014', hanzi: '便宜一點', pinyin: 'pián yí yī diǎn', indonesian: 'kurangi harganya sedikit', english: 'a bit cheaper', pos: 'phrase', register: 'casual', scenario: 3 },
  { id: 's03-015', hanzi: '打折', pinyin: 'dǎ zhé', indonesian: 'diskon', english: 'discount', pos: 'verb/noun', register: 'casual', scenario: 3 },
  { id: 's03-016', hanzi: '特價', pinyin: 'tè jià', indonesian: 'harga spesial / promo', english: 'special price / on sale', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-017', hanzi: '有沒有⋯⋯？', pinyin: 'yǒu méi yǒu ...?', indonesian: 'ada ... tidak?', english: 'do you have ...?', pos: 'phrase', register: 'casual', scenario: 3 },
  { id: 's03-018', hanzi: '試穿', pinyin: 'shì chuān', indonesian: 'coba pakai (baju)', english: 'try on (clothes)', pos: 'verb', register: 'casual', scenario: 3 },
  { id: 's03-019', hanzi: '試用', pinyin: 'shì yòng', indonesian: 'coba pakai (produk)', english: 'try (a product)', pos: 'verb', register: 'casual', scenario: 3 },
  { id: 's03-020', hanzi: '尺寸', pinyin: 'chǐ cùn', indonesian: 'ukuran', english: 'size', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-021', hanzi: '顏色', pinyin: 'yán sè', indonesian: 'warna', english: 'color', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-022', hanzi: '有沒有別的顏色？', pinyin: 'yǒu méi yǒu bié de yán sè?', indonesian: 'ada warna lain?', english: 'any other colors?', pos: 'phrase', register: 'casual', scenario: 3 },

  // Supermarket
  { id: 's03-030', hanzi: '全聯', pinyin: 'Quánlián', indonesian: 'PX Mart', english: 'PX Mart (supermarket)', pos: 'noun', register: 'casual', scenario: 3, taiwan_note: 'Most popular supermarket chain in Taiwan' },
  { id: 's03-031', hanzi: '大潤發', pinyin: 'Dàrùnfā', indonesian: 'RT Mart', english: 'RT Mart (hypermarket)', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-032', hanzi: '購物車', pinyin: 'gòu wù chē', indonesian: 'troli belanja', english: 'shopping cart', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-033', hanzi: '結帳', pinyin: 'jié zhàng', indonesian: 'bayar / checkout', english: 'checkout / pay', pos: 'verb', register: 'casual', scenario: 3 },
  { id: 's03-034', hanzi: '會員卡', pinyin: 'huì yuán kǎ', indonesian: 'kartu member', english: 'membership card', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-035', hanzi: '有沒有會員卡？', pinyin: 'yǒu méi yǒu huì yuán kǎ?', indonesian: 'punya kartu member?', english: 'do you have a membership card?', pos: 'phrase', register: 'casual', scenario: 3 },

  // Payment
  { id: 's03-040', hanzi: '刷卡', pinyin: 'shuā kǎ', indonesian: 'bayar kartu', english: 'pay by card', pos: 'verb', register: 'casual', scenario: 3 },
  { id: 's03-041', hanzi: '現金', pinyin: 'xiàn jīn', indonesian: 'uang tunai', english: 'cash', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-042', hanzi: '找零', pinyin: 'zhǎo líng', indonesian: 'kembalian', english: 'change (coins)', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-043', hanzi: '收據', pinyin: 'shōu jù', indonesian: 'kwitansi / struk', english: 'receipt', pos: 'noun', register: 'casual', scenario: 3 },
  { id: 's03-044', hanzi: '退換貨', pinyin: 'tuì huàn huò', indonesian: 'retur / tukar barang', english: 'return / exchange item', pos: 'phrase', register: 'casual', scenario: 3 },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd03-01',
    scenario: 3,
    title: 'Di 7-Eleven',
    lines: [
      { speaker: 'Kasir', hanzi: '你好，一共八十五元。', pinyin: 'Nǐ hǎo, yígòng bā shí wǔ yuán.', indonesian: 'Halo, totalnya delapan puluh lima dolar.' },
      { speaker: 'Kamu', hanzi: '可以刷卡嗎？', pinyin: 'Kě yǐ shuā kǎ ma?', indonesian: 'Bisa bayar pakai kartu?' },
      { speaker: 'Kasir', hanzi: '可以。需要袋子嗎？', pinyin: 'Kě yǐ. Xū yào dài zi ma?', indonesian: 'Bisa. Perlu kantong?' },
      { speaker: 'Kamu', hanzi: '不用了，謝謝。', pinyin: 'Bù yòng le, xiè xiè.', indonesian: 'Tidak perlu, terima kasih.' },
    ],
  },
  {
    id: 'd03-02',
    scenario: 3,
    title: 'Mencari ukuran baju',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，這個有大一點的嗎？', pinyin: 'Bù hǎo yì si, zhè gè yǒu dà yī diǎn de ma?', indonesian: 'Permisi, yang ini ada ukuran lebih besar?' },
      { speaker: 'Penjaga', hanzi: '有，你要幾號的？', pinyin: 'Yǒu, nǐ yào jǐ hào de?', indonesian: 'Ada, mau ukuran berapa?' },
      { speaker: 'Kamu', hanzi: '我想試穿L號。', pinyin: 'Wǒ xiǎng shì chuān L hào.', indonesian: 'Saya mau coba ukuran L.' },
      { speaker: 'Penjaga', hanzi: '試衣間在那邊。', pinyin: 'Shì yī jiān zài nà biān.', indonesian: 'Ruang ganti di sana.' },
    ],
  },
  {
    id: 'd03-03',
    scenario: 3,
    title: 'Retur / tukar barang',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，我想退換這個。', pinyin: 'Bù hǎo yì si, wǒ xiǎng tuìhuàn zhège.', indonesian: 'Permisi, saya mau retur/tukar yang ini.' },
      { speaker: 'Staf', hanzi: '請問有收據嗎？', pinyin: 'Qǐng wèn yǒu shōujù ma?', indonesian: 'Permisi, ada striknya?' },
      { speaker: 'Kamu', hanzi: '有，在這裡。', pinyin: 'Yǒu, zài zhèlǐ.', indonesian: 'Ada, ini dia.' },
      { speaker: 'Staf', hanzi: '請問是要退款還是換貨？', pinyin: 'Qǐng wèn shì yào tuìkuǎn háishì huànhuò?', indonesian: 'Mau refund atau tukar barang?' },
      { speaker: 'Kamu', hanzi: '換貨，我要換小一號的。', pinyin: 'Huànhuò, wǒ yào huàn xiǎo yī hào de.', indonesian: 'Tukar barang, saya mau ganti yang ukuran lebih kecil.' },
    ],
  },
  {
    id: 'd03-04',
    scenario: 3,
    title: 'Di supermarket — tanya lokasi produk',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，請問洗髮精在哪裡？', pinyin: 'Bù hǎo yì si, qǐng wèn xǐfǎjīng zài nǎlǐ?', indonesian: 'Permisi, sampo ada di mana?' },
      { speaker: 'Staf', hanzi: '在三樓的日用品區。', pinyin: 'Zài sān lóu de rìyòngpǐn qū.', indonesian: 'Di lantai tiga, bagian produk harian.' },
      { speaker: 'Kamu', hanzi: '謝謝。有沒有會員卡的折扣？', pinyin: 'Xiè xiè. Yǒu méiyǒu huìyuán kǎ de zhékòu?', indonesian: 'Terima kasih. Ada diskon kartu member?' },
      { speaker: 'Staf', hanzi: '有，會員可以打九折。', pinyin: 'Yǒu, huìyuán kěyǐ dǎ jiǔ zhé.', indonesian: 'Ada, member bisa diskon 10% (90% dari harga).' },
    ],
  },
  {
    id: 'd03-05',
    scenario: 3,
    title: 'Bayar di kasir — ada masalah',
    lines: [
      { speaker: 'Kasir', hanzi: '這張卡感應不到，可以試另一張嗎？', pinyin: 'Zhè zhāng kǎ gǎnyìng bù dào, kěyǐ shì lìng yī zhāng ma?', indonesian: 'Kartu ini tidak terbaca, bisa coba kartu lain?' },
      { speaker: 'Kamu', hanzi: '好，我用現金付。', pinyin: 'Hǎo, wǒ yòng xiànjīn fù.', indonesian: 'Baik, saya bayar tunai.' },
      { speaker: 'Kasir', hanzi: '一共三百二十元。', pinyin: 'Yígòng sān bǎi èr shí yuán.', indonesian: 'Totalnya tiga ratus dua puluh dolar.' },
      { speaker: 'Kamu', hanzi: '這是四百元，找我八十。', pinyin: 'Zhè shì sì bǎi yuán, zhǎo wǒ bā shí.', indonesian: 'Ini empat ratus dolar, kembaliannya delapan puluh.' },
    ],
  },
]
