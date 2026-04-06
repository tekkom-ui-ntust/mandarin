import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // Office basics
  { id: 's06-001', hanzi: '上班', pinyin: 'shàngbān', indonesian: 'masuk kerja / berangkat kerja', english: 'to go to work', pos: 'verb', register: 'casual', scenario: 6 },
  { id: 's06-002', hanzi: '下班', pinyin: 'xiàbān', indonesian: 'pulang kerja / selesai kerja', english: 'to get off work', pos: 'verb', register: 'casual', scenario: 6 },
  { id: 's06-003', hanzi: '加班', pinyin: 'jiābān', indonesian: 'lembur', english: 'overtime', pos: 'verb', register: 'casual', scenario: 6 },
  { id: 's06-004', hanzi: '請假', pinyin: 'qǐng jià', indonesian: 'minta izin / cuti', english: 'to request leave', pos: 'verb', register: 'casual', scenario: 6 },
  { id: 's06-005', hanzi: '會議', pinyin: 'huìyì', indonesian: 'rapat / meeting', english: 'meeting', pos: 'noun', register: 'formal', scenario: 6 },
  { id: 's06-006', hanzi: '開會', pinyin: 'kāihuì', indonesian: 'rapat / mengadakan rapat', english: 'to have a meeting', pos: 'verb', register: 'casual', scenario: 6 },
  { id: 's06-007', hanzi: '截止日期', pinyin: 'jiézhǐ rìqī', indonesian: 'deadline', english: 'deadline', pos: 'noun', register: 'formal', scenario: 6 },
  { id: 's06-008', hanzi: '報告', pinyin: 'bàogào', indonesian: 'laporan / presentasi', english: 'report / presentation', pos: 'noun', register: 'formal', scenario: 6 },
  { id: 's06-009', hanzi: '客戶', pinyin: 'kèhù', indonesian: 'klien / nasabah', english: 'client / customer', pos: 'noun', register: 'formal', scenario: 6 },
  { id: 's06-010', hanzi: '同事', pinyin: 'tóngshì', indonesian: 'rekan kerja', english: 'colleague', pos: 'noun', register: 'casual', scenario: 6 },
  { id: 's06-011', hanzi: '老闆', pinyin: 'lǎobǎn', indonesian: 'bos / atasan', english: 'boss', pos: 'noun', register: 'casual', scenario: 6 },
  { id: 's06-012', hanzi: '主管', pinyin: 'zhǔguǎn', indonesian: 'supervisor / manager', english: 'supervisor / manager', pos: 'noun', register: 'formal', scenario: 6 },
  { id: 's06-013', hanzi: '薪水', pinyin: 'xīnshuǐ', indonesian: 'gaji', english: 'salary', pos: 'noun', register: 'casual', scenario: 6 },
  { id: 's06-014', hanzi: '我不太清楚', pinyin: 'wǒ bú tài qīngchǔ', indonesian: 'saya kurang paham', english: 'I\'m not quite sure', pos: 'phrase', register: 'casual', scenario: 6 },
  { id: 's06-015', hanzi: '請問可以幫我⋯⋯嗎？', pinyin: 'qǐng wèn kěyǐ bāng wǒ... ma?', indonesian: 'permisi, bisa bantu saya ...?', english: 'could you help me ...?', pos: 'phrase', register: 'casual', scenario: 6 },
  { id: 's06-016', hanzi: '麻煩你了', pinyin: 'máfan nǐ le', indonesian: 'merepotkan kamu / terima kasih atas bantuannya', english: 'sorry to trouble you / thanks', pos: 'phrase', register: 'casual', scenario: 6 },
  { id: 's06-017', hanzi: '辛苦了', pinyin: 'xīnkǔ le', indonesian: 'terima kasih sudah kerja keras', english: 'you\'ve worked hard / good job', pos: 'phrase', register: 'casual', scenario: 6, taiwan_note: 'Said to acknowledge someone\'s hard work, very common' },
  { id: 's06-018', hanzi: '做得很好', pinyin: 'zuò de hěn hǎo', indonesian: 'kerjamu bagus sekali', english: 'well done', pos: 'phrase', register: 'casual', scenario: 6 },
  { id: 's06-019', hanzi: '我趕時間', pinyin: 'wǒ gǎn shíjiān', indonesian: 'saya terburu-buru', english: 'I\'m in a hurry', pos: 'phrase', register: 'casual', scenario: 6 },
  { id: 's06-020', hanzi: '先這樣', pinyin: 'xiān zhèyàng', indonesian: 'segini dulu / cukup dulu', english: 'that\'s all for now', pos: 'phrase', register: 'casual', scenario: 6, taiwan_note: 'Common way to end a conversation or meeting informally' },

  // Study
  { id: 's06-030', hanzi: '學校', pinyin: 'xuéxiào', indonesian: 'sekolah', english: 'school', pos: 'noun', register: 'casual', scenario: 6 },
  { id: 's06-031', hanzi: '大學', pinyin: 'dàxué', indonesian: 'universitas', english: 'university', pos: 'noun', register: 'casual', scenario: 6 },
  { id: 's06-032', hanzi: '語言學校', pinyin: 'yǔyán xuéxiào', indonesian: 'sekolah bahasa', english: 'language school', pos: 'noun', register: 'casual', scenario: 6 },
  { id: 's06-033', hanzi: '作業', pinyin: 'zuòyè', indonesian: 'PR / tugas', english: 'homework / assignment', pos: 'noun', register: 'casual', scenario: 6 },
  { id: 's06-034', hanzi: '考試', pinyin: 'kǎoshì', indonesian: 'ujian', english: 'exam', pos: 'noun', register: 'casual', scenario: 6 },
  { id: 's06-035', hanzi: '我聽不懂', pinyin: 'wǒ tīng bù dǒng', indonesian: 'saya tidak mengerti (yang didengar)', english: 'I don\'t understand (spoken)', pos: 'phrase', register: 'casual', scenario: 6 },
  { id: 's06-036', hanzi: '可以再說一次嗎？', pinyin: 'kěyǐ zài shuō yīcì ma?', indonesian: 'bisa ulangi sekali lagi?', english: 'can you say that again?', pos: 'phrase', register: 'casual', scenario: 6 },
  { id: 's06-037', hanzi: '請說慢一點', pinyin: 'qǐng shuō màn yīdiǎn', indonesian: 'tolong bicara lebih pelan', english: 'please speak slower', pos: 'phrase', register: 'casual', scenario: 6 },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd06-01',
    scenario: 6,
    title: 'Minta izin tidak masuk kerja',
    lines: [
      { speaker: 'Kamu', hanzi: '主管，我今天身體不舒服，可以請假嗎？', pinyin: 'Zhǔguǎn, wǒ jīntiān shēntǐ bù shūfú, kěyǐ qǐng jià ma?', indonesian: 'Pak/Bu Manager, hari ini badan saya tidak enak, boleh minta izin?' },
      { speaker: 'Manager', hanzi: '好，你好好休息。記得傳訊息給我。', pinyin: 'Hǎo, nǐ hǎohǎo xiūxi. Jìde chuán xùnxī gěi wǒ.', indonesian: 'Baik, kamu istirahat yang baik. Ingat kirim pesan ke saya.' },
      { speaker: 'Kamu', hanzi: '好的，麻煩你了。', pinyin: 'Hǎo de, máfan nǐ le.', indonesian: 'Baik, terima kasih banyak.' },
    ],
  },
  {
    id: 'd06-02',
    scenario: 6,
    title: 'Minta bantuan rekan kerja',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，這個報告我不太清楚怎麼做，可以幫我嗎？', pinyin: 'Bù hǎo yìsi, zhège bàogào wǒ bú tài qīngchǔ zěnme zuò, kěyǐ bāng wǒ ma?', indonesian: 'Permisi, laporan ini saya kurang paham cara buatnya, bisa bantu saya?' },
      { speaker: 'Teman', hanzi: '沒問題，我教你。', pinyin: 'Méi wèntí, wǒ jiāo nǐ.', indonesian: 'Tidak masalah, saya ajari kamu.' },
      { speaker: 'Kamu', hanzi: '謝謝，辛苦你了。', pinyin: 'Xiè xiè, xīnkǔ nǐ le.', indonesian: 'Terima kasih, merepotkan kamu.' },
      { speaker: 'Teman', hanzi: '哪裡，大家互相幫忙嘛。', pinyin: 'Nǎlǐ, dàjiā hùxiāng bāngmáng ma.', indonesian: 'Tidak juga, semua orang saling membantu kok.' },
    ],
  },
  {
    id: 'd06-03',
    scenario: 6,
    title: 'Di kelas — tidak mengerti',
    lines: [
      { speaker: 'Guru', hanzi: '你聽懂了嗎？', pinyin: 'Nǐ tīng dǒng le ma?', indonesian: 'Kamu sudah mengerti?' },
      { speaker: 'Kamu', hanzi: '老師，我聽不太懂，可以再說一次嗎？', pinyin: 'Lǎoshī, wǒ tīng bú tài dǒng, kěyǐ zài shuō yīcì ma?', indonesian: 'Bu/Pak Guru, saya kurang mengerti, bisa ulangi sekali lagi?' },
      { speaker: 'Guru', hanzi: '當然可以，我說慢一點。', pinyin: 'Dāngrán kěyǐ, wǒ shuō màn yīdiǎn.', indonesian: 'Tentu bisa, saya bicara lebih pelan.' },
      { speaker: 'Kamu', hanzi: '謝謝老師！', pinyin: 'Xiè xiè lǎoshī!', indonesian: 'Terima kasih Pak/Bu Guru!' },
    ],
  },
  {
    id: 'd06-04',
    scenario: 6,
    title: 'Setelah rapat / menutup percakapan',
    lines: [
      { speaker: 'A', hanzi: '好，今天的會議就先這樣。', pinyin: 'Hǎo, jīntiān de huìyì jiù xiān zhèyàng.', indonesian: 'Baik, rapat hari ini cukup sampai di sini.' },
      { speaker: 'B', hanzi: '大家辛苦了！', pinyin: 'Dàjiā xīnkǔ le!', indonesian: 'Semua sudah kerja keras, terima kasih!' },
      { speaker: 'A', hanzi: '截止日期是下週五，記得喔。', pinyin: 'Jiézhǐ rìqī shì xià zhōuwǔ, jìde o.', indonesian: 'Deadline-nya Jumat depan, ingat ya.' },
      { speaker: 'Semua', hanzi: '好，知道了！', pinyin: 'Hǎo, zhīdào le!', indonesian: 'Baik, sudah tahu!' },
    ],
  },
  {
    id: 'd06-05',
    scenario: 6,
    title: 'Tanya jam pulang kerja',
    lines: [
      { speaker: 'Kamu', hanzi: '你今天幾點下班？', pinyin: 'Nǐ jīntiān jǐ diǎn xiàbān?', indonesian: 'Kamu hari ini pulang kerja jam berapa?' },
      { speaker: 'Teman', hanzi: '應該六點，但可能要加班。', pinyin: 'Yīnggāi liù diǎn, dàn kěnéng yào jiābān.', indonesian: 'Harusnya jam enam, tapi mungkin harus lembur.' },
      { speaker: 'Kamu', hanzi: '辛苦了！下班後要不要一起吃飯？', pinyin: 'Xīnkǔ le! Xiàbān hòu yào bú yào yīqǐ chīfàn?', indonesian: 'Sudah kerja keras! Setelah pulang kerja mau makan bersama?' },
      { speaker: 'Teman', hanzi: '好啊，等我一下！', pinyin: 'Hǎo a, děng wǒ yīxià!', indonesian: 'Boleh, tunggu saya sebentar!' },
    ],
  },
]
