import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // Emergency
  { id: 's10-001', hanzi: '救命！', pinyin: 'jiùmìng!', indonesian: 'tolong! / minta bantuan!', english: 'help! (save my life)', pos: 'interjection', register: 'casual', scenario: 10 },
  { id: 's10-002', hanzi: '不好意思，我需要幫助', pinyin: 'bù hǎo yìsi, wǒ xūyào bāngzhù', indonesian: 'permisi, saya butuh bantuan', english: 'excuse me, I need help', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-003', hanzi: '警察', pinyin: 'jǐngchá', indonesian: 'polisi', english: 'police', pos: 'noun', register: 'casual', scenario: 10 },
  { id: 's10-004', hanzi: '救護車', pinyin: 'jiùhù chē', indonesian: 'ambulans', english: 'ambulance', pos: 'noun', register: 'casual', scenario: 10 },
  { id: 's10-005', hanzi: '消防車', pinyin: 'xiāofáng chē', indonesian: 'mobil pemadam', english: 'fire truck', pos: 'noun', register: 'casual', scenario: 10 },
  { id: 's10-006', hanzi: '叫警察', pinyin: 'jiào jǐngchá', indonesian: 'panggil polisi', english: 'call the police', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-007', hanzi: '打119', pinyin: 'dǎ yāo yāo jiǔ', indonesian: 'telepon 119 (ambulans/pemadam)', english: 'call 119 (ambulance/fire)', pos: 'phrase', register: 'casual', scenario: 10, taiwan_note: '119 is for ambulance and fire in Taiwan. 110 is police.' },
  { id: 's10-008', hanzi: '打110', pinyin: 'dǎ yāo yāo líng', indonesian: 'telepon 110 (polisi)', english: 'call 110 (police)', pos: 'phrase', register: 'casual', scenario: 10, taiwan_note: '110 is the police emergency number in Taiwan' },
  { id: 's10-009', hanzi: '有人受傷', pinyin: 'yǒu rén shòushāng', indonesian: 'ada orang yang terluka', english: 'someone is injured', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-010', hanzi: '快來！', pinyin: 'kuài lái!', indonesian: 'cepat datang!', english: 'come quickly!', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-011', hanzi: '我迷路了', pinyin: 'wǒ mílù le', indonesian: 'saya tersesat', english: 'I am lost', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-012', hanzi: '我的手機不見了', pinyin: 'wǒ de shǒujī bú jiàn le', indonesian: 'HP saya hilang', english: 'my phone is missing', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-013', hanzi: '錢包不見了', pinyin: 'qiánbāo bú jiàn le', indonesian: 'dompet saya hilang', english: 'my wallet is missing', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-014', hanzi: '護照', pinyin: 'hùzhào', indonesian: 'paspor', english: 'passport', pos: 'noun', register: 'casual', scenario: 10 },
  { id: 's10-015', hanzi: '我的護照不見了', pinyin: 'wǒ de hùzhào bú jiàn le', indonesian: 'paspor saya hilang', english: 'my passport is lost', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-016', hanzi: '被偷了', pinyin: 'bèi tōu le', indonesian: 'dicuri', english: 'was stolen', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-017', hanzi: '發生事故', pinyin: 'fāshēng shìgù', indonesian: 'terjadi kecelakaan', english: 'an accident occurred', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-018', hanzi: '我不知道地址', pinyin: 'wǒ bù zhīdào dìzhǐ', indonesian: 'saya tidak tahu alamatnya', english: 'I don\'t know the address', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-019', hanzi: '台灣的緊急電話', pinyin: 'Táiwān de jǐnjí diànhuà', indonesian: 'nomor darurat Taiwan', english: 'Taiwan emergency numbers', pos: 'phrase', register: 'formal', scenario: 10, taiwan_note: '110=Police, 119=Ambulance/Fire, 1999=Non-emergency city hotline' },
  { id: 's10-020', hanzi: '有沒有人說英文？', pinyin: 'yǒu méiyǒu rén shuō Yīngwén?', indonesian: 'ada yang bisa bahasa Inggris?', english: 'does anyone speak English?', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-021', hanzi: '我需要翻譯', pinyin: 'wǒ xūyào fānyì', indonesian: 'saya butuh penerjemah', english: 'I need a translator', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-022', hanzi: '請幫我打電話給⋯⋯', pinyin: 'qǐng bāng wǒ dǎ diànhuà gěi...', indonesian: 'tolong bantu saya telepon ...', english: 'please help me call ...', pos: 'phrase', register: 'casual', scenario: 10 },
  { id: 's10-023', hanzi: '我在哪裡？', pinyin: 'wǒ zài nǎlǐ?', indonesian: 'saya ada di mana?', english: 'where am I?', pos: 'phrase', register: 'casual', scenario: 10 },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd10-01',
    scenario: 10,
    title: 'Minta bantuan saat tersesat',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，我迷路了，可以幫我嗎？', pinyin: 'Bù hǎo yìsi, wǒ mílù le, kěyǐ bāng wǒ ma?', indonesian: 'Permisi, saya tersesat, bisa bantu saya?' },
      { speaker: 'Orang', hanzi: '當然，你要去哪裡？', pinyin: 'Dāngrán, nǐ yào qù nǎlǐ?', indonesian: 'Tentu, kamu mau ke mana?' },
      { speaker: 'Kamu', hanzi: '我要去台北車站，但我不知道我在哪裡。', pinyin: 'Wǒ yào qù Táiběi Chēzhàn, dàn wǒ bù zhīdào wǒ zài nǎlǐ.', indonesian: 'Saya mau ke Stasiun Taipei, tapi saya tidak tahu saya ada di mana.' },
      { speaker: 'Orang', hanzi: '你現在在忠孝東路，往前走到捷運站，搭車去台北車站。', pinyin: 'Nǐ xiànzài zài Zhōngxiào Dōnglù, wǎng qián zǒu dào jiéyùn zhàn, dāchē qù Táiběi Chēzhàn.', indonesian: 'Kamu sekarang di Jalan Zhongxiao Timur, jalan ke depan ke stasiun MRT, lalu naik ke Stasiun Taipei.' },
      { speaker: 'Kamu', hanzi: '謝謝你，非常感謝！', pinyin: 'Xiè xiè nǐ, fēicháng gǎnxiè!', indonesian: 'Terima kasih, sangat berterima kasih!' },
    ],
  },
  {
    id: 'd10-02',
    scenario: 10,
    title: 'HP hilang / dicuri',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，我的手機被偷了！', pinyin: 'Bù hǎo yìsi, wǒ de shǒujī bèi tōu le!', indonesian: 'Permisi, HP saya dicuri!' },
      { speaker: 'Staf', hanzi: '在哪裡發生的？', pinyin: 'Zài nǎlǐ fāshēng de?', indonesian: 'Terjadi di mana?' },
      { speaker: 'Kamu', hanzi: '在捷運站裡。', pinyin: 'Zài jiéyùn zhàn lǐ.', indonesian: 'Di dalam stasiun MRT.' },
      { speaker: 'Staf', hanzi: '請到警察局報案。我幫你叫警察。', pinyin: 'Qǐng dào jǐngchájú bào àn. Wǒ bāng nǐ jiào jǐngchá.', indonesian: 'Tolong pergi ke kantor polisi untuk membuat laporan. Saya bantu panggilkan polisi.' },
    ],
  },
  {
    id: 'd10-03',
    scenario: 10,
    title: 'Panggil ambulans',
    lines: [
      { speaker: 'Kamu', hanzi: '喂，119嗎？有人受傷，需要救護車！', pinyin: 'Wèi, 119 ma? Yǒu rén shòushāng, xūyào jiùhù chē!', indonesian: 'Halo, 119? Ada orang terluka, butuh ambulans!' },
      { speaker: 'Operator', hanzi: '請問地址在哪裡？', pinyin: 'Qǐng wèn dìzhǐ zài nǎlǐ?', indonesian: 'Permisi, alamatnya di mana?' },
      { speaker: 'Kamu', hanzi: '我不知道確切地址，我在信義路和忠孝路的路口。', pinyin: 'Wǒ bù zhīdào quèqiè dìzhǐ, wǒ zài Xìnyì lù hé Zhōngxiào lù de lùkǒu.', indonesian: 'Saya tidak tahu alamat pastinya, saya di persimpangan Jalan Xinyi dan Jalan Zhongxiao.' },
      { speaker: 'Operator', hanzi: '好，救護車馬上來，請保持冷靜。', pinyin: 'Hǎo, jiùhù chē mǎshàng lái, qǐng bǎochí lěngjìng.', indonesian: 'Baik, ambulans segera datang, tolong tetap tenang.' },
    ],
  },
  {
    id: 'd10-04',
    scenario: 10,
    title: 'Paspor hilang — ke kedutaan',
    lines: [
      { speaker: 'Kamu', hanzi: '我的護照不見了，我需要幫助。', pinyin: 'Wǒ de hùzhào bú jiàn le, wǒ xūyào bāngzhù.', indonesian: 'Paspor saya hilang, saya butuh bantuan.' },
      { speaker: 'Staf', hanzi: '你是哪個國家的？', pinyin: 'Nǐ shì nǎgè guójiā de?', indonesian: 'Kamu warga negara mana?' },
      { speaker: 'Kamu', hanzi: '我是印尼人，可以幫我聯絡印尼在台協會嗎？', pinyin: 'Wǒ shì Yìnní rén, kěyǐ bāng wǒ liánluò Yìnní zài tái xiéhuì ma?', indonesian: 'Saya orang Indonesia, bisa bantu saya hubungi Kantor Dagang dan Ekonomi Indonesia di Taiwan?' },
      { speaker: 'Staf', hanzi: '可以，請跟我來。', pinyin: 'Kěyǐ, qǐng gēn wǒ lái.', indonesian: 'Bisa, tolong ikut saya.' },
    ],
  },
  {
    id: 'd10-05',
    scenario: 10,
    title: 'Tidak bisa bicara Mandarin dalam darurat',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，有沒有人說英文？', pinyin: 'Bù hǎo yìsi, yǒu méiyǒu rén shuō Yīngwén?', indonesian: 'Permisi, ada yang bisa bahasa Inggris?' },
      { speaker: 'Orang', hanzi: '我可以，發生什麼事了？', pinyin: 'Wǒ kěyǐ, fāshēng shénme shì le?', indonesian: 'Saya bisa, ada apa?' },
      { speaker: 'Kamu', hanzi: '謝謝，我需要翻譯，我的中文不太好。', pinyin: 'Xiè xiè, wǒ xūyào fānyì, wǒ de zhōngwén bú tài hǎo.', indonesian: 'Terima kasih, saya butuh penerjemah, Mandarin saya kurang bagus.' },
    ],
  },
]
