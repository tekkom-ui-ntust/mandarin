import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // Phone calls
  { id: 's09-001', hanzi: '打電話', pinyin: 'dǎ diànhuà', indonesian: 'telepon / menelepon', english: 'to make a phone call', pos: 'verb', register: 'casual', scenario: 9 },
  { id: 's09-002', hanzi: '接電話', pinyin: 'jiē diànhuà', indonesian: 'angkat telepon', english: 'to answer the phone', pos: 'verb', register: 'casual', scenario: 9 },
  { id: 's09-003', hanzi: '掛電話', pinyin: 'guà diànhuà', indonesian: 'tutup telepon', english: 'to hang up', pos: 'verb', register: 'casual', scenario: 9 },
  { id: 's09-004', hanzi: '喂', pinyin: 'wèi', indonesian: 'halo (di telepon)', english: 'hello (on phone)', pos: 'interjection', register: 'casual', scenario: 9, taiwan_note: 'Always used when answering phone calls in Taiwan' },
  { id: 's09-005', hanzi: '你現在方便說話嗎？', pinyin: 'nǐ xiànzài fāngbiàn shuōhuà ma?', indonesian: 'apakah sekarang kamu bisa bicara?', english: 'is it a good time to talk?', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-006', hanzi: '我等一下回你', pinyin: 'wǒ děng yīxià huí nǐ', indonesian: 'saya hubungi kamu nanti', english: 'I\'ll call/message you back later', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-007', hanzi: '訊號不好', pinyin: 'xùnhào bù hǎo', indonesian: 'sinyal jelek', english: 'bad signal', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-008', hanzi: '聽不清楚', pinyin: 'tīng bù qīngchǔ', indonesian: 'tidak terdengar jelas', english: 'can\'t hear clearly', pos: 'phrase', register: 'casual', scenario: 9 },

  // LINE / messaging
  { id: 's09-010', hanzi: 'LINE', pinyin: 'LINE', indonesian: 'LINE (aplikasi chat)', english: 'LINE (messaging app)', pos: 'noun', register: 'casual', scenario: 9, taiwan_note: 'Dominant messaging app in Taiwan, used for everything' },
  { id: 's09-011', hanzi: '傳訊息', pinyin: 'chuán xùnxī', indonesian: 'kirim pesan', english: 'to send a message', pos: 'verb', register: 'casual', scenario: 9 },
  { id: 's09-012', hanzi: '已讀', pinyin: 'yǐ dú', indonesian: 'sudah dibaca (centang biru)', english: 'read (message status)', pos: 'verb', register: 'casual', scenario: 9, taiwan_note: '已讀不回 (already read, no reply) is a very Taiwanese concept / complaint' },
  { id: 's09-013', hanzi: '已讀不回', pinyin: 'yǐ dú bù huí', indonesian: 'dibaca tapi tidak dibalas (ghosting)', english: 'read and ignored / left on read', pos: 'phrase', register: 'casual', scenario: 9, tags: ['Taiwan'] },
  { id: 's09-014', hanzi: '貼圖', pinyin: 'tiē tú', indonesian: 'stiker (di LINE)', english: 'LINE sticker', pos: 'noun', register: 'casual', scenario: 9, taiwan_note: 'LINE stickers are huge in Taiwan culture' },
  { id: 's09-015', hanzi: '群組', pinyin: 'qúnzǔ', indonesian: 'grup chat', english: 'group chat', pos: 'noun', register: 'casual', scenario: 9 },
  { id: 's09-016', hanzi: '語音訊息', pinyin: 'yǔyīn xùnxī', indonesian: 'pesan suara', english: 'voice message', pos: 'noun', register: 'casual', scenario: 9 },
  { id: 's09-017', hanzi: '視訊通話', pinyin: 'shìxùn tōnghuà', indonesian: 'video call', english: 'video call', pos: 'noun', register: 'casual', scenario: 9 },

  // Texting slang / abbreviations
  { id: 's09-020', hanzi: '哈哈', pinyin: 'hāhā', indonesian: 'haha', english: 'haha (laugh)', pos: 'interjection', register: 'casual', scenario: 9 },
  { id: 's09-021', hanzi: '好喔', pinyin: 'hǎo o', indonesian: 'oke deh', english: 'okay then / sure', pos: 'phrase', register: 'casual', scenario: 9, tags: ['Taiwan'] },
  { id: 's09-022', hanzi: '了解', pinyin: 'liǎojiě', indonesian: 'mengerti / siap', english: 'understood / got it', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-023', hanzi: '收到', pinyin: 'shōu dào', indonesian: 'diterima / siap', english: 'received / roger', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-024', hanzi: '等我一下', pinyin: 'děng wǒ yīxià', indonesian: 'tunggu sebentar', english: 'wait for me a sec', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-025', hanzi: '在嗎？', pinyin: 'zài ma?', indonesian: 'ada di sana?', english: 'are you there?', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-026', hanzi: '我到了', pinyin: 'wǒ dào le', indonesian: 'saya sudah sampai', english: 'I\'ve arrived', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-027', hanzi: '快到了', pinyin: 'kuài dào le', indonesian: 'sebentar lagi sampai', english: 'almost there', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-028', hanzi: '晚點說', pinyin: 'wǎn diǎn shuō', indonesian: 'nanti bicara lagi', english: 'talk later', pos: 'phrase', register: 'casual', scenario: 9 },
  { id: 's09-029', hanzi: '掰掰', pinyin: 'bāibāi', indonesian: 'bye bye / dadah', english: 'bye bye', pos: 'interjection', register: 'casual', scenario: 9, taiwan_note: 'From English "bye bye", extremely common in Taiwan' },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd09-01',
    scenario: 9,
    title: 'Angkat telepon',
    lines: [
      { speaker: 'Kamu', hanzi: '喂，你好。', pinyin: 'Wèi, nǐ hǎo.', indonesian: 'Halo, hai.' },
      { speaker: 'A', hanzi: '喂，你現在方便說話嗎？', pinyin: 'Wèi, nǐ xiànzài fāngbiàn shuōhuà ma?', indonesian: 'Halo, sekarang bisa bicara?' },
      { speaker: 'Kamu', hanzi: '可以啊，怎麼了？', pinyin: 'Kěyǐ a, zěnme le?', indonesian: 'Bisa, ada apa?' },
      { speaker: 'A', hanzi: '我今天可能會晚一點，等一下LINE你。', pinyin: 'Wǒ jīntiān kěnéng huì wǎn yīdiǎn, děng yīxià LINE nǐ.', indonesian: 'Hari ini saya mungkin agak terlambat, nanti saya LINE kamu.' },
      { speaker: 'Kamu', hanzi: '好，收到。那等你喔。', pinyin: 'Hǎo, shōu dào. Nà děng nǐ o.', indonesian: 'Oke, siap. Ya saya tunggu.' },
    ],
  },
  {
    id: 'd09-02',
    scenario: 9,
    title: 'Chat LINE — mau temu',
    lines: [
      { speaker: 'A', hanzi: '在嗎？', pinyin: 'Zài ma?', indonesian: 'Ada?' },
      { speaker: 'Kamu', hanzi: '在啊，怎麼了？', pinyin: 'Zài a, zěnme le?', indonesian: 'Ada, ada apa?' },
      { speaker: 'A', hanzi: '今天下午要不要去逛逛？', pinyin: 'Jīntiān xiàwǔ yào bú yào qù guànguàn?', indonesian: 'Sore ini mau jalan-jalan?' },
      { speaker: 'Kamu', hanzi: '好喔！幾點？', pinyin: 'Hǎo o! Jǐ diǎn?', indonesian: 'Oke deh! Jam berapa?' },
      { speaker: 'A', hanzi: '三點，捷運站見。', pinyin: 'Sān diǎn, jiéyùn zhàn jiàn.', indonesian: 'Jam tiga, ketemu di stasiun MRT.' },
      { speaker: 'Kamu', hanzi: '了解，快到的時候告訴我。', pinyin: 'Liǎojiě, kuài dào de shíhòu gàosù wǒ.', indonesian: 'Mengerti, kalau sudah mau sampai kabari saya.' },
    ],
  },
  {
    id: 'd09-03',
    scenario: 9,
    title: 'Sinyal jelek saat telepon',
    lines: [
      { speaker: 'A', hanzi: '喂？聽得到嗎？', pinyin: 'Wèi? Tīng de dào ma?', indonesian: 'Halo? Bisa dengar?' },
      { speaker: 'Kamu', hanzi: '聽不清楚，訊號不太好。', pinyin: 'Tīng bù qīngchǔ, xùnhào bú tài hǎo.', indonesian: 'Tidak terdengar jelas, sinyalnya kurang bagus.' },
      { speaker: 'A', hanzi: '我等一下再打給你。', pinyin: 'Wǒ děng yīxià zài dǎ gěi nǐ.', indonesian: 'Saya telepon kamu lagi nanti.' },
      { speaker: 'Kamu', hanzi: '好，掰掰。', pinyin: 'Hǎo, bāibāi.', indonesian: 'Oke, bye.' },
    ],
  },
  {
    id: 'd09-04',
    scenario: 9,
    title: 'Sudah sampai — chat singkat',
    lines: [
      { speaker: 'Kamu', hanzi: '我到了，你在哪？', pinyin: 'Wǒ dào le, nǐ zài nǎ?', indonesian: 'Saya sudah sampai, kamu di mana?' },
      { speaker: 'A', hanzi: '快到了！再五分鐘。', pinyin: 'Kuài dào le! Zài wǔ fēnzhōng.', indonesian: 'Sebentar lagi! Lima menit lagi.' },
      { speaker: 'Kamu', hanzi: '好，我在出口一等你。', pinyin: 'Hǎo, wǒ zài chūkǒu yī děng nǐ.', indonesian: 'Oke, saya tunggu di pintu keluar 1.' },
    ],
  },
  {
    id: 'd09-05',
    scenario: 9,
    title: 'Tinggalkan pesan suara',
    lines: [
      { speaker: 'Voicemail', hanzi: '您好，請在嗶聲後留言。', pinyin: 'Nín hǎo, qǐng zài bī shēng hòu liúyán.', indonesian: 'Halo, tolong tinggalkan pesan setelah bunyi bip.' },
      { speaker: 'Kamu', hanzi: '你好，我是安迪。請你方便的時候回我電話，謝謝。掰掰。', pinyin: 'Nǐ hǎo, wǒ shì Āndí. Qǐng nǐ fāngbiàn de shíhòu huí wǒ diànhuà, xiè xiè. Bāibāi.', indonesian: 'Halo, saya Andi. Tolong hubungi saya balik kalau sudah ada waktu, terima kasih. Bye.' },
    ],
  },
]
