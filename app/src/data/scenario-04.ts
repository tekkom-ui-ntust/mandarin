import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // Greetings
  { id: 's04-001', hanzi: '你好', pinyin: 'nǐ hǎo', indonesian: 'halo / hai', english: 'hello', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-002', hanzi: '你好嗎？', pinyin: 'nǐ hǎo ma?', indonesian: 'kamu baik-baik saja?', english: 'how are you?', pos: 'phrase', register: 'formal', scenario: 4, taiwan_note: 'Less common in casual speech; Taiwanese tend to say 你吃了嗎？ or 去哪裡？instead' },
  { id: 's04-003', hanzi: '吃了嗎？', pinyin: 'chī le ma?', indonesian: 'sudah makan?', english: 'have you eaten?', pos: 'phrase', register: 'casual', scenario: 4, taiwan_note: 'Common Taiwanese greeting, equivalent to "how are you?"' },
  { id: 's04-004', hanzi: '去哪裡？', pinyin: 'qù nǎ lǐ?', indonesian: 'mau ke mana?', english: 'where are you going?', pos: 'phrase', register: 'casual', scenario: 4, taiwan_note: 'Casual greeting when passing someone' },
  { id: 's04-005', hanzi: '最近怎麼樣？', pinyin: 'zuì jìn zěn me yàng?', indonesian: 'belakangan ini bagaimana?', english: 'how have you been lately?', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-006', hanzi: '還好', pinyin: 'hái hǎo', indonesian: 'lumayan / biasa saja', english: 'not bad / okay', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-007', hanzi: '很好', pinyin: 'hěn hǎo', indonesian: 'sangat baik', english: 'very good', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-008', hanzi: '還行', pinyin: 'hái xíng', indonesian: 'masih oke / boleh lah', english: 'still okay / getting by', pos: 'phrase', register: 'casual', scenario: 4 },

  // Introductions
  { id: 's04-010', hanzi: '我叫⋯⋯', pinyin: 'wǒ jiào...', indonesian: 'nama saya ...', english: 'my name is ...', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-011', hanzi: '你叫什麼名字？', pinyin: 'nǐ jiào shénme míngzì?', indonesian: 'siapa namamu?', english: 'what is your name?', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-012', hanzi: '我是印尼人', pinyin: 'wǒ shì Yìnní rén', indonesian: 'saya orang Indonesia', english: 'I am Indonesian', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-013', hanzi: '你是哪裡人？', pinyin: 'nǐ shì nǎlǐ rén?', indonesian: 'kamu orang mana?', english: 'where are you from?', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-014', hanzi: '幸會', pinyin: 'xìnghuì', indonesian: 'senang berkenalan', english: 'nice to meet you', pos: 'phrase', register: 'formal', scenario: 4 },
  { id: 's04-015', hanzi: '久仰', pinyin: 'jiǔyǎng', indonesian: 'sudah lama dengar nama Anda', english: 'I\'ve heard a lot about you', pos: 'phrase', register: 'formal', scenario: 4 },

  // Compliments
  { id: 's04-020', hanzi: '你的中文說得很好！', pinyin: 'nǐ de zhōngwén shuō de hěn hǎo!', indonesian: 'Mandarin kamu bagus sekali!', english: 'your Chinese is really good!', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-021', hanzi: '哪裡哪裡', pinyin: 'nǎlǐ nǎlǐ', indonesian: 'ah tidak juga / biasa saja (merendah)', english: 'oh not at all (humble reply)', pos: 'phrase', register: 'casual', scenario: 4, taiwan_note: 'Typical modest response to a compliment' },
  { id: 's04-022', hanzi: '你穿這個很好看', pinyin: 'nǐ chuān zhège hěn hǎokàn', indonesian: 'kamu kelihatan bagus pakai ini', english: 'you look great in this', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-023', hanzi: '好厲害喔！', pinyin: 'hǎo lìhài o!', indonesian: 'keren banget!', english: 'that\'s amazing!', pos: 'phrase', register: 'casual', scenario: 4 },

  // Making plans
  { id: 's04-030', hanzi: '你有空嗎？', pinyin: 'nǐ yǒu kòng ma?', indonesian: 'kamu ada waktu luang?', english: 'are you free?', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-031', hanzi: '我有空', pinyin: 'wǒ yǒu kòng', indonesian: 'saya ada waktu', english: 'I\'m free', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-032', hanzi: '我沒空', pinyin: 'wǒ méi kòng', indonesian: 'saya tidak ada waktu', english: 'I\'m not free / busy', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-033', hanzi: '要不要一起⋯⋯？', pinyin: 'yào bú yào yīqǐ...?', indonesian: 'mau tidak ... bersama?', english: 'want to ... together?', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-034', hanzi: '下次吧', pinyin: 'xià cì ba', indonesian: 'lain kali saja', english: 'maybe next time', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-035', hanzi: '沒問題', pinyin: 'méi wèntí', indonesian: 'tidak masalah / oke', english: 'no problem', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-036', hanzi: '等一下', pinyin: 'děng yīxià', indonesian: 'tunggu sebentar', english: 'wait a moment', pos: 'phrase', register: 'casual', scenario: 4 },

  // Apologies
  { id: 's04-040', hanzi: '對不起', pinyin: 'duìbuqǐ', indonesian: 'maaf (serius)', english: 'sorry (sincere)', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-041', hanzi: '不好意思', pinyin: 'bù hǎo yìsi', indonesian: 'permisi / maaf (ringan)', english: 'excuse me / sorry (light)', pos: 'phrase', register: 'casual', scenario: 4, taiwan_note: 'More common than 對不起 in daily Taiwan use' },
  { id: 's04-042', hanzi: '沒關係', pinyin: 'méi guānxi', indonesian: 'tidak apa-apa', english: 'it\'s okay / never mind', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-043', hanzi: '我不是故意的', pinyin: 'wǒ bú shì gùyì de', indonesian: 'saya tidak sengaja', english: 'I didn\'t do it on purpose', pos: 'phrase', register: 'casual', scenario: 4 },

  // Fillers & particles
  { id: 's04-050', hanzi: '就是說', pinyin: 'jiù shì shuō', indonesian: 'maksudnya / yaitu', english: 'that is to say / I mean', pos: 'filler', register: 'casual', scenario: 4, tags: ['Taiwan'] },
  { id: 's04-051', hanzi: '對啊', pinyin: 'duì a', indonesian: 'iya betul', english: 'yeah, right / exactly', pos: 'filler', register: 'casual', scenario: 4, tags: ['Taiwan'] },
  { id: 's04-052', hanzi: '然後呢', pinyin: 'rán hòu ne', indonesian: 'terus? / lalu?', english: 'then? / and then?', pos: 'filler', register: 'casual', scenario: 4, tags: ['Taiwan'] },
  { id: 's04-053', hanzi: '欸', pinyin: 'ēi', indonesian: 'eh / hei', english: 'hey / eh', pos: 'particle', register: 'casual', scenario: 4, tags: ['Taiwan'] },
  { id: 's04-054', hanzi: '嘛', pinyin: 'ma', indonesian: '(penekanan / ya sudah tahu)', english: '(obviousness particle)', pos: 'particle', register: 'casual', scenario: 4, tags: ['Taiwan'] },
  { id: 's04-055', hanzi: '囉', pinyin: 'lo', indonesian: '(penanda selesai / ya kan)', english: '(completion / obvious particle)', pos: 'particle', register: 'casual', scenario: 4, tags: ['Taiwan'] },

  // Line / messaging
  { id: 's04-060', hanzi: '你有LINE嗎？', pinyin: 'nǐ yǒu LINE ma?', indonesian: 'kamu punya LINE?', english: 'do you have LINE?', pos: 'phrase', register: 'casual', scenario: 4, taiwan_note: 'LINE is the dominant messaging app in Taiwan' },
  { id: 's04-061', hanzi: '加我好友', pinyin: 'jiā wǒ hǎoyǒu', indonesian: 'tambahkan aku sebagai teman', english: 'add me as a friend', pos: 'phrase', register: 'casual', scenario: 4 },
  { id: 's04-062', hanzi: '傳訊息給我', pinyin: 'chuán xùnxī gěi wǒ', indonesian: 'kirimi saya pesan', english: 'send me a message', pos: 'phrase', register: 'casual', scenario: 4 },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd04-01',
    scenario: 4,
    title: 'Kenalan pertama',
    lines: [
      { speaker: 'A', hanzi: '你好！我叫小明。你呢？', pinyin: 'Nǐ hǎo! Wǒ jiào Xiǎomíng. Nǐ ne?', indonesian: 'Halo! Nama saya Xiaoming. Kalau kamu?' },
      { speaker: 'B', hanzi: '你好！我叫安迪，我是印尼人。', pinyin: 'Nǐ hǎo! Wǒ jiào Āndí, wǒ shì Yìnní rén.', indonesian: 'Halo! Nama saya Andi, saya orang Indonesia.' },
      { speaker: 'A', hanzi: '哇，你的中文說得很好！', pinyin: 'Wā, nǐ de zhōngwén shuō de hěn hǎo!', indonesian: 'Wah, Mandarin kamu bagus banget!' },
      { speaker: 'B', hanzi: '哪裡哪裡，我還在學。', pinyin: 'Nǎlǐ nǎlǐ, wǒ hái zài xué.', indonesian: 'Ah tidak juga, saya masih belajar.' },
      { speaker: 'A', hanzi: '你有LINE嗎？我加你。', pinyin: 'Nǐ yǒu LINE ma? Wǒ jiā nǐ.', indonesian: 'Kamu punya LINE? Saya tambahkan kamu.' },
    ],
  },
  {
    id: 'd04-02',
    scenario: 4,
    title: 'Buat rencana bareng',
    lines: [
      { speaker: 'A', hanzi: '欸，你週末有空嗎？', pinyin: 'Ēi, nǐ zhōumò yǒu kòng ma?', indonesian: 'Eh, kamu ada waktu luang akhir pekan?' },
      { speaker: 'B', hanzi: '有啊，怎麼了？', pinyin: 'Yǒu a, zěnme le?', indonesian: 'Ada, memangnya ada apa?' },
      { speaker: 'A', hanzi: '要不要一起去士林夜市？', pinyin: 'Yào bú yào yīqǐ qù Shìlín Yèshì?', indonesian: 'Mau tidak pergi ke Pasar Malam Shilin bersama?' },
      { speaker: 'B', hanzi: '好啊！幾點？', pinyin: 'Hǎo a! Jǐ diǎn?', indonesian: 'Boleh! Jam berapa?' },
      { speaker: 'A', hanzi: '晚上七點，捷運士林站出口一。', pinyin: 'Wǎnshàng qī diǎn, jiéyùn Shìlín zhàn chūkǒu yī.', indonesian: 'Jam tujuh malam, pintu keluar 1 Stasiun MRT Shilin.' },
    ],
  },
  {
    id: 'd04-03',
    scenario: 4,
    title: 'Minta maaf',
    lines: [
      { speaker: 'A', hanzi: '對不起，我遲到了！', pinyin: 'Duìbuqǐ, wǒ chídào le!', indonesian: 'Maaf, saya terlambat!' },
      { speaker: 'B', hanzi: '沒關係，我剛到。', pinyin: 'Méi guānxi, wǒ gāng dào.', indonesian: 'Tidak apa-apa, saya baru sampai juga.' },
      { speaker: 'A', hanzi: '路上塞車，等很久了嗎？', pinyin: 'Lùshàng sāichē, děng hěn jiǔ le ma?', indonesian: 'Di jalan macet, sudah lama menunggu?' },
      { speaker: 'B', hanzi: '才五分鐘，沒事啦。', pinyin: 'Cái wǔ fēnzhōng, méishì la.', indonesian: 'Baru lima menit, tidak apa-apa kok.' },
    ],
  },
  {
    id: 'd04-04',
    scenario: 4,
    title: 'Obrolan ringan',
    lines: [
      { speaker: 'A', hanzi: '最近怎麼樣？', pinyin: 'Zuì jìn zěnme yàng?', indonesian: 'Belakangan ini bagaimana?' },
      { speaker: 'B', hanzi: '還行啦，工作有點忙。', pinyin: 'Hái xíng la, gōngzuò yǒudiǎn máng.', indonesian: 'Lumayan, kerjaan agak sibuk.' },
      { speaker: 'A', hanzi: '對啊，我也是。', pinyin: 'Duì a, wǒ yě shì.', indonesian: 'Iya betul, saya juga.' },
      { speaker: 'B', hanzi: '對了，你吃了嗎？要不要去吃個飯？', pinyin: 'Duì le, nǐ chī le ma? Yào bú yào qù chī gè fàn?', indonesian: 'Oh iya, sudah makan? Mau pergi makan bersama?' },
    ],
  },
  {
    id: 'd04-05',
    scenario: 4,
    title: 'Tolak ajakan dengan sopan',
    lines: [
      { speaker: 'A', hanzi: '週五要不要來我家？', pinyin: 'Zhōuwǔ yào bú yào lái wǒ jiā?', indonesian: 'Jumat mau datang ke rumah saya?' },
      { speaker: 'B', hanzi: '不好意思，週五我沒空。', pinyin: 'Bù hǎo yìsi, zhōuwǔ wǒ méi kòng.', indonesian: 'Maaf, Jumat saya tidak ada waktu.' },
      { speaker: 'A', hanzi: '沒關係，下次吧！', pinyin: 'Méi guānxi, xià cì ba!', indonesian: 'Tidak apa-apa, lain kali saja!' },
      { speaker: 'B', hanzi: '好，下次一定來！', pinyin: 'Hǎo, xià cì yīdìng lái!', indonesian: 'Oke, lain kali pasti datang!' },
    ],
  },
]
