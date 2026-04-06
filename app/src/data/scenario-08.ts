import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  { id: 's08-001', hanzi: '錢', pinyin: 'qián', indonesian: 'uang', english: 'money', pos: 'noun', register: 'casual', scenario: 8 },
  { id: 's08-002', hanzi: '台幣', pinyin: 'Táibì', indonesian: 'Dolar Taiwan (TWD)', english: 'New Taiwan Dollar', pos: 'noun', register: 'casual', scenario: 8 },
  { id: 's08-003', hanzi: '銀行', pinyin: 'yínháng', indonesian: 'bank', english: 'bank', pos: 'noun', register: 'casual', scenario: 8 },
  { id: 's08-004', hanzi: '提款機', pinyin: 'tíkuǎnjī', indonesian: 'ATM', english: 'ATM', pos: 'noun', register: 'casual', scenario: 8, taiwan_note: 'Also called 自動提款機 (zìdòng tíkuǎnjī)' },
  { id: 's08-005', hanzi: '存款', pinyin: 'cúnkuǎn', indonesian: 'menabung / setoran', english: 'deposit / savings', pos: 'verb/noun', register: 'casual', scenario: 8 },
  { id: 's08-006', hanzi: '提款', pinyin: 'tíkuǎn', indonesian: 'tarik tunai', english: 'withdraw cash', pos: 'verb', register: 'casual', scenario: 8 },
  { id: 's08-007', hanzi: '轉帳', pinyin: 'zhuǎnzhàng', indonesian: 'transfer uang', english: 'bank transfer', pos: 'verb', register: 'casual', scenario: 8 },
  { id: 's08-008', hanzi: '匯款', pinyin: 'huìkuǎn', indonesian: 'kirim uang / remittance', english: 'remittance / send money', pos: 'verb', register: 'casual', scenario: 8 },
  { id: 's08-009', hanzi: '帳戶', pinyin: 'zhànghù', indonesian: 'rekening bank', english: 'bank account', pos: 'noun', register: 'casual', scenario: 8 },
  { id: 's08-010', hanzi: '帳號', pinyin: 'zhànghào', indonesian: 'nomor rekening', english: 'account number', pos: 'noun', register: 'casual', scenario: 8 },
  { id: 's08-011', hanzi: '手續費', pinyin: 'shǒuxù fèi', indonesian: 'biaya administrasi', english: 'transaction / processing fee', pos: 'noun', register: 'casual', scenario: 8 },
  { id: 's08-012', hanzi: '匯率', pinyin: 'huìlǜ', indonesian: 'nilai tukar', english: 'exchange rate', pos: 'noun', register: 'casual', scenario: 8 },
  { id: 's08-013', hanzi: '換錢', pinyin: 'huàn qián', indonesian: 'tukar uang', english: 'change money / exchange currency', pos: 'verb', register: 'casual', scenario: 8 },
  { id: 's08-014', hanzi: '密碼', pinyin: 'mìmǎ', indonesian: 'PIN / kata sandi', english: 'PIN / password', pos: 'noun', register: 'casual', scenario: 8 },
  { id: 's08-015', hanzi: '餘額', pinyin: 'yú\'é', indonesian: 'saldo', english: 'balance', pos: 'noun', register: 'casual', scenario: 8 },
  { id: 's08-016', hanzi: '一起付', pinyin: 'yīqǐ fù', indonesian: 'bayar bareng', english: 'pay together', pos: 'phrase', register: 'casual', scenario: 8 },
  { id: 's08-017', hanzi: '各付各的', pinyin: 'gè fù gè de', indonesian: 'bayar masing-masing / dutch', english: 'split the bill / go Dutch', pos: 'phrase', register: 'casual', scenario: 8 },
  { id: 's08-018', hanzi: '我請客', pinyin: 'wǒ qǐng kè', indonesian: 'saya yang traktir', english: 'it\'s on me / my treat', pos: 'phrase', register: 'casual', scenario: 8 },
  { id: 's08-019', hanzi: '你上次請，這次我來', pinyin: 'nǐ shàng cì qǐng, zhè cì wǒ lái', indonesian: 'kemarin kamu yang traktir, kali ini giliran saya', english: 'you treated last time, this time it\'s my turn', pos: 'phrase', register: 'casual', scenario: 8 },
  { id: 's08-020', hanzi: '可以掃碼付款嗎？', pinyin: 'kěyǐ sǎo mǎ fùkuǎn ma?', indonesian: 'bisa bayar scan QR code?', english: 'can I pay by QR code scan?', pos: 'phrase', register: 'casual', scenario: 8, taiwan_note: 'LINE Pay and 街口支付 (Jkopay) are common QR payment apps in Taiwan' },
  { id: 's08-021', hanzi: '街口支付', pinyin: 'Jiēkǒu Zhīfù', indonesian: 'Jkopay', english: 'Jkopay (payment app)', pos: 'noun', register: 'casual', scenario: 8, taiwan_note: 'Taiwan-specific QR payment app, very popular' },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd08-01',
    scenario: 8,
    title: 'Tarik tunai di ATM',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，請問提款機在哪裡？', pinyin: 'Bù hǎo yìsi, qǐng wèn tíkuǎnjī zài nǎlǐ?', indonesian: 'Permisi, ATM ada di mana?' },
      { speaker: 'Staf', hanzi: '在超商旁邊，走過去大概一分鐘。', pinyin: 'Zài chāoshāng pángbiān, zǒu guòqù dàgài yī fēnzhōng.', indonesian: 'Di sebelah minimarket, jalan ke sana sekitar satu menit.' },
    ],
  },
  {
    id: 'd08-02',
    scenario: 8,
    title: 'Bagi tagihan — bayar masing-masing',
    lines: [
      { speaker: 'A', hanzi: '吃完了，怎麼付？', pinyin: 'Chī wán le, zěnme fù?', indonesian: 'Sudah selesai makan, bagaimana bayarnya?' },
      { speaker: 'B', hanzi: '各付各的吧，我付我的那份。', pinyin: 'Gè fù gè de ba, wǒ fù wǒ de nà fèn.', indonesian: 'Bayar masing-masing saja, saya bayar bagian saya.' },
      { speaker: 'A', hanzi: '好，你的是兩百五十元。', pinyin: 'Hǎo, nǐ de shì liǎng bǎi wǔ shí yuán.', indonesian: 'Oke, bagian kamu dua ratus lima puluh dolar.' },
      { speaker: 'B', hanzi: '我用LINE Pay轉給你。', pinyin: 'Wǒ yòng LINE Pay zhuǎn gěi nǐ.', indonesian: 'Saya transfer lewat LINE Pay ke kamu.' },
    ],
  },
  {
    id: 'd08-03',
    scenario: 8,
    title: 'Traktir teman',
    lines: [
      { speaker: 'A', hanzi: '今天我請客！', pinyin: 'Jīntiān wǒ qǐng kè!', indonesian: 'Hari ini saya yang traktir!' },
      { speaker: 'B', hanzi: '不用啦，各付各的就好。', pinyin: 'Bú yòng la, gè fù gè de jiù hǎo.', indonesian: 'Tidak perlu, bayar masing-masing saja.' },
      { speaker: 'A', hanzi: '你上次請我，這次換我請你。', pinyin: 'Nǐ shàng cì qǐng wǒ, zhè cì huàn wǒ qǐng nǐ.', indonesian: 'Kemarin kamu traktir saya, sekarang giliran saya traktir kamu.' },
      { speaker: 'B', hanzi: '好啦，謝謝你！下次我請！', pinyin: 'Hǎo la, xiè xiè nǐ! Xià cì wǒ qǐng!', indonesian: 'Baiklah, terima kasih! Lain kali saya yang traktir!' },
    ],
  },
  {
    id: 'd08-04',
    scenario: 8,
    title: 'Tukar uang',
    lines: [
      { speaker: 'Kamu', hanzi: '我想把印尼盾換成台幣。', pinyin: 'Wǒ xiǎng bǎ Yìnní dùn huàn chéng Táibì.', indonesian: 'Saya mau tukar Rupiah ke Dolar Taiwan.' },
      { speaker: 'Staf', hanzi: '今天匯率是一台幣換四百七十元印尼盾。', pinyin: 'Jīntiān huìlǜ shì yī Táibì huàn sìbǎi qīshí yuán Yìnní dùn.', indonesian: 'Nilai tukar hari ini satu TWD setara empat ratus tujuh puluh Rupiah.' },
      { speaker: 'Kamu', hanzi: '好，我換兩萬台幣。', pinyin: 'Hǎo, wǒ huàn liǎng wàn Táibì.', indonesian: 'Oke, saya tukar dua puluh ribu Dolar Taiwan.' },
    ],
  },
  {
    id: 'd08-05',
    scenario: 8,
    title: 'Bayar dengan scan QR',
    lines: [
      { speaker: 'Kasir', hanzi: '請問要怎麼付？', pinyin: 'Qǐng wèn yào zěnme fù?', indonesian: 'Permisi, mau bayar bagaimana?' },
      { speaker: 'Kamu', hanzi: '可以掃碼付款嗎？', pinyin: 'Kěyǐ sǎo mǎ fùkuǎn ma?', indonesian: 'Bisa bayar scan QR code?' },
      { speaker: 'Kasir', hanzi: '可以，我們有街口支付和LINE Pay。', pinyin: 'Kěyǐ, wǒmen yǒu Jiēkǒu Zhīfù hé LINE Pay.', indonesian: 'Bisa, kami ada Jkopay dan LINE Pay.' },
      { speaker: 'Kamu', hanzi: '好，我用LINE Pay。請掃這個。', pinyin: 'Hǎo, wǒ yòng LINE Pay. Qǐng sǎo zhège.', indonesian: 'Oke, saya pakai LINE Pay. Tolong scan yang ini.' },
    ],
  },
]
