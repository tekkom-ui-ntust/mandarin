import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // Body parts / symptoms
  { id: 's07-001', hanzi: '頭痛', pinyin: 'tóutòng', indonesian: 'sakit kepala', english: 'headache', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-002', hanzi: '肚子痛', pinyin: 'dùzi tòng', indonesian: 'sakit perut', english: 'stomachache', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-003', hanzi: '喉嚨痛', pinyin: 'hóulóng tòng', indonesian: 'sakit tenggorokan', english: 'sore throat', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-004', hanzi: '發燒', pinyin: 'fāshāo', indonesian: 'demam', english: 'fever', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-005', hanzi: '流鼻水', pinyin: 'liú bíshuǐ', indonesian: 'pilek / meler', english: 'runny nose', pos: 'phrase', register: 'casual', scenario: 7 },
  { id: 's07-006', hanzi: '咳嗽', pinyin: 'késòu', indonesian: 'batuk', english: 'cough', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-007', hanzi: '感冒', pinyin: 'gǎnmào', indonesian: 'flu / pilek', english: 'cold / flu', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-008', hanzi: '過敏', pinyin: 'guòmǐn', indonesian: 'alergi', english: 'allergy', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-009', hanzi: '噁心', pinyin: 'ěxīn', indonesian: 'mual', english: 'nausea', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-010', hanzi: '拉肚子', pinyin: 'lā dùzi', indonesian: 'diare / mencret', english: 'diarrhea', pos: 'phrase', register: 'casual', scenario: 7 },
  { id: 's07-011', hanzi: '我不舒服', pinyin: 'wǒ bù shūfú', indonesian: 'saya tidak enak badan', english: 'I feel unwell', pos: 'phrase', register: 'casual', scenario: 7 },
  { id: 's07-012', hanzi: '很嚴重嗎？', pinyin: 'hěn yánzhòng ma?', indonesian: 'serius / parah?', english: 'is it serious?', pos: 'phrase', register: 'casual', scenario: 7 },

  // Clinic / pharmacy
  { id: 's07-020', hanzi: '診所', pinyin: 'zhěnsuǒ', indonesian: 'klinik', english: 'clinic', pos: 'noun', register: 'casual', scenario: 7, taiwan_note: 'Small private clinics are everywhere in Taiwan; cheaper than hospitals for minor illness' },
  { id: 's07-021', hanzi: '醫院', pinyin: 'yīyuàn', indonesian: 'rumah sakit', english: 'hospital', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-022', hanzi: '藥局', pinyin: 'yàojú', indonesian: 'apotek', english: 'pharmacy', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-023', hanzi: '看醫生', pinyin: 'kàn yīshēng', indonesian: 'periksa ke dokter', english: 'see a doctor', pos: 'phrase', register: 'casual', scenario: 7 },
  { id: 's07-024', hanzi: '掛號', pinyin: 'guàhào', indonesian: 'daftar / registrasi (di klinik)', english: 'register at clinic', pos: 'verb', register: 'casual', scenario: 7, taiwan_note: 'In Taiwan clinics you must 掛號 (register) first; often done online via app' },
  { id: 's07-025', hanzi: '健保卡', pinyin: 'jiànbǎo kǎ', indonesian: 'kartu asuransi kesehatan', english: 'National Health Insurance card', pos: 'noun', register: 'casual', scenario: 7, taiwan_note: 'Taiwan NHI card — essential for clinic visits; covers most treatments cheaply' },
  { id: 's07-026', hanzi: '藥', pinyin: 'yào', indonesian: 'obat', english: 'medicine', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-027', hanzi: '止痛藥', pinyin: 'zhǐtòng yào', indonesian: 'obat pereda nyeri', english: 'painkiller', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-028', hanzi: '退燒藥', pinyin: 'tuìshāo yào', indonesian: 'obat penurun demam', english: 'fever reducer', pos: 'noun', register: 'casual', scenario: 7 },
  { id: 's07-029', hanzi: '一天幾次？', pinyin: 'yītiān jǐ cì?', indonesian: 'sehari berapa kali?', english: 'how many times a day?', pos: 'phrase', register: 'casual', scenario: 7 },
  { id: 's07-030', hanzi: '飯前', pinyin: 'fàn qián', indonesian: 'sebelum makan', english: 'before meals', pos: 'adverb', register: 'casual', scenario: 7 },
  { id: 's07-031', hanzi: '飯後', pinyin: 'fàn hòu', indonesian: 'setelah makan', english: 'after meals', pos: 'adverb', register: 'casual', scenario: 7 },
  { id: 's07-032', hanzi: '多休息', pinyin: 'duō xiūxi', indonesian: 'banyak istirahat', english: 'get plenty of rest', pos: 'phrase', register: 'casual', scenario: 7 },
  { id: 's07-033', hanzi: '多喝水', pinyin: 'duō hē shuǐ', indonesian: 'banyak minum air', english: 'drink plenty of water', pos: 'phrase', register: 'casual', scenario: 7 },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd07-01',
    scenario: 7,
    title: 'Di klinik — daftarkan diri',
    lines: [
      { speaker: 'Staf', hanzi: '你好，請問有掛號嗎？', pinyin: 'Nǐ hǎo, qǐng wèn yǒu guàhào ma?', indonesian: 'Halo, permisi, sudah daftar?' },
      { speaker: 'Kamu', hanzi: '還沒，我現場掛號可以嗎？', pinyin: 'Hái méi, wǒ xiànchǎng guàhào kěyǐ ma?', indonesian: 'Belum, bisa daftar langsung di sini?' },
      { speaker: 'Staf', hanzi: '可以，請給我健保卡。', pinyin: 'Kěyǐ, qǐng gěi wǒ jiànbǎo kǎ.', indonesian: 'Bisa, tolong berikan kartu asuransi kesehatan.' },
      { speaker: 'Kamu', hanzi: '這是我的健保卡。', pinyin: 'Zhè shì wǒ de jiànbǎo kǎ.', indonesian: 'Ini kartu asuransi kesehatan saya.' },
      { speaker: 'Staf', hanzi: '好，請稍等，醫生一下子就到。', pinyin: 'Hǎo, qǐng shāo děng, yīshēng yīxià zi jiù dào.', indonesian: 'Baik, tolong tunggu sebentar, dokter akan segera datang.' },
    ],
  },
  {
    id: 'd07-02',
    scenario: 7,
    title: 'Jelaskan gejala ke dokter',
    lines: [
      { speaker: 'Dokter', hanzi: '你哪裡不舒服？', pinyin: 'Nǐ nǎlǐ bù shūfú?', indonesian: 'Bagian mana yang tidak enak?' },
      { speaker: 'Kamu', hanzi: '我頭痛、喉嚨痛，昨天開始發燒。', pinyin: 'Wǒ tóutòng, hóulóng tòng, zuótiān kāishǐ fāshāo.', indonesian: 'Saya sakit kepala, sakit tenggorokan, dan mulai demam dari kemarin.' },
      { speaker: 'Dokter', hanzi: '有沒有咳嗽或流鼻水？', pinyin: 'Yǒu méiyǒu késòu huò liú bíshuǐ?', indonesian: 'Ada batuk atau pilek?' },
      { speaker: 'Kamu', hanzi: '有，一直流鼻水。', pinyin: 'Yǒu, yīzhí liú bíshuǐ.', indonesian: 'Ada, terus-terusan pilek.' },
      { speaker: 'Dokter', hanzi: '感冒了，多休息、多喝水，我開藥給你。', pinyin: 'Gǎnmào le, duō xiūxi, duō hē shuǐ, wǒ kāi yào gěi nǐ.', indonesian: 'Kamu flu, banyak istirahat dan minum air, saya tulis resep obat.' },
    ],
  },
  {
    id: 'd07-03',
    scenario: 7,
    title: 'Di apotek — beli obat',
    lines: [
      { speaker: 'Kamu', hanzi: '我想買止痛藥，有什麼推薦的？', pinyin: 'Wǒ xiǎng mǎi zhǐtòng yào, yǒu shénme tuījiàn de?', indonesian: 'Saya mau beli obat pereda nyeri, ada yang direkomendasikan?' },
      { speaker: 'Apoteker', hanzi: '這個很好用，一天三次，飯後服用。', pinyin: 'Zhège hěn hǎo yòng, yītiān sān cì, fàn hòu fúyòng.', indonesian: 'Yang ini bagus, tiga kali sehari, diminum setelah makan.' },
      { speaker: 'Kamu', hanzi: '好，謝謝。多少錢？', pinyin: 'Hǎo, xiè xiè. Duōshǎo qián?', indonesian: 'Oke, terima kasih. Berapa harganya?' },
      { speaker: 'Apoteker', hanzi: '一百二十元。', pinyin: 'Yī bǎi èr shí yuán.', indonesian: 'Seratus dua puluh dolar.' },
    ],
  },
  {
    id: 'd07-04',
    scenario: 7,
    title: 'Minta obat tanpa resep',
    lines: [
      { speaker: 'Kamu', hanzi: '我過敏，有沒有過敏藥？', pinyin: 'Wǒ guòmǐn, yǒu méiyǒu guòmǐn yào?', indonesian: 'Saya alergi, ada obat alergi?' },
      { speaker: 'Apoteker', hanzi: '請問是什麼過敏？', pinyin: 'Qǐng wèn shì shénme guòmǐn?', indonesian: 'Permisi, alergi apa?' },
      { speaker: 'Kamu', hanzi: '花粉過敏，眼睛很癢。', pinyin: 'Huāfěn guòmǐn, yǎnjīng hěn yǎng.', indonesian: 'Alergi serbuk sari, mata sangat gatal.' },
      { speaker: 'Apoteker', hanzi: '這個藥可以幫助，但會有點想睡覺。', pinyin: 'Zhège yào kěyǐ bāngzhù, dàn huì yǒudiǎn xiǎng shuìjiào.', indonesian: 'Obat ini bisa membantu, tapi akan ada rasa mengantuk.' },
    ],
  },
  {
    id: 'd07-05',
    scenario: 7,
    title: 'Telepon klinik untuk buat janji',
    lines: [
      { speaker: 'Kamu', hanzi: '你好，我想預約看診。', pinyin: 'Nǐ hǎo, wǒ xiǎng yùyuē kàn zhěn.', indonesian: 'Halo, saya mau buat janji periksa.' },
      { speaker: 'Staf', hanzi: '請問要哪一天？', pinyin: 'Qǐng wèn yào nǎ yītiān?', indonesian: 'Permisi, mau hari apa?' },
      { speaker: 'Kamu', hanzi: '明天下午可以嗎？', pinyin: 'Míngtiān xiàwǔ kěyǐ ma?', indonesian: 'Besok siang bisa?' },
      { speaker: 'Staf', hanzi: '可以，下午兩點，請帶健保卡來。', pinyin: 'Kěyǐ, xiàwǔ liǎng diǎn, qǐng dài jiànbǎo kǎ lái.', indonesian: 'Bisa, jam dua siang, tolong bawa kartu asuransi.' },
    ],
  },
]
