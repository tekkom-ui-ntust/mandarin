import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  { id: 's05-001', hanzi: '房間', pinyin: 'fángjiān', indonesian: 'kamar', english: 'room', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-002', hanzi: '套房', pinyin: 'tàofáng', indonesian: 'studio / kamar dengan kamar mandi dalam', english: 'studio apartment', pos: 'noun', register: 'casual', scenario: 5, taiwan_note: 'Very common rental type in Taiwan cities' },
  { id: 's05-003', hanzi: '雅房', pinyin: 'yǎfáng', indonesian: 'kamar sewa (kamar mandi luar)', english: 'room with shared bathroom', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-004', hanzi: '房東', pinyin: 'fángdōng', indonesian: 'pemilik rumah / landlord', english: 'landlord', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-005', hanzi: '房客', pinyin: 'fángkè', indonesian: 'penyewa', english: 'tenant', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-006', hanzi: '租金', pinyin: 'zūjīn', indonesian: 'uang sewa', english: 'rent', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-007', hanzi: '押金', pinyin: 'yājīn', indonesian: 'deposit', english: 'security deposit', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-008', hanzi: '合約', pinyin: 'héyuē', indonesian: 'kontrak', english: 'contract / lease', pos: 'noun', register: 'formal', scenario: 5 },
  { id: 's05-009', hanzi: '幾個月？', pinyin: 'jǐ gè yuè?', indonesian: 'berapa bulan?', english: 'how many months?', pos: 'phrase', register: 'casual', scenario: 5 },
  { id: 's05-010', hanzi: '包水電', pinyin: 'bāo shuǐdiàn', indonesian: 'sudah termasuk air dan listrik', english: 'utilities included', pos: 'phrase', register: 'casual', scenario: 5, taiwan_note: 'Common to ask 有沒有包水電？when renting' },
  { id: 's05-011', hanzi: '水費', pinyin: 'shuǐfèi', indonesian: 'tagihan air', english: 'water bill', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-012', hanzi: '電費', pinyin: 'diànfèi', indonesian: 'tagihan listrik', english: 'electricity bill', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-013', hanzi: '網路', pinyin: 'wǎnglù', indonesian: 'internet / wifi', english: 'internet', pos: 'noun', register: 'casual', scenario: 5, taiwan_note: 'Taiwan uses 網路 where mainland uses 网络' },
  { id: 's05-014', hanzi: '有沒有含網路？', pinyin: 'yǒu méiyǒu hán wǎnglù?', indonesian: 'termasuk internet?', english: 'is internet included?', pos: 'phrase', register: 'casual', scenario: 5 },
  { id: 's05-015', hanzi: '附近', pinyin: 'fùjìn', indonesian: 'sekitar sini / dekat sini', english: 'nearby', pos: 'adverb', register: 'casual', scenario: 5 },
  { id: 's05-016', hanzi: '捷運站', pinyin: 'jiéyùn zhàn', indonesian: 'stasiun MRT', english: 'MRT station', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-017', hanzi: '走路幾分鐘到捷運？', pinyin: 'zǒulù jǐ fēnzhōng dào jiéyùn?', indonesian: 'jalan kaki berapa menit ke MRT?', english: 'how many minutes walk to MRT?', pos: 'phrase', register: 'casual', scenario: 5 },
  { id: 's05-018', hanzi: '看房', pinyin: 'kàn fáng', indonesian: 'survei kamar / lihat rumah', english: 'to view a property', pos: 'verb', register: 'casual', scenario: 5 },
  { id: 's05-019', hanzi: '搬家', pinyin: 'bānjiā', indonesian: 'pindah rumah', english: 'to move house', pos: 'verb', register: 'casual', scenario: 5 },
  { id: 's05-020', hanzi: '鑰匙', pinyin: 'yàoshi', indonesian: 'kunci', english: 'key', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-021', hanzi: '壞掉了', pinyin: 'huài diào le', indonesian: 'rusak', english: 'broken', pos: 'phrase', register: 'casual', scenario: 5 },
  { id: 's05-022', hanzi: '冷氣', pinyin: 'lěngqì', indonesian: 'AC', english: 'air conditioning', pos: 'noun', register: 'casual', scenario: 5, taiwan_note: '冷氣 is standard in Taiwan; mainland says 空調' },
  { id: 's05-023', hanzi: '熱水器', pinyin: 'rèshuǐqì', indonesian: 'water heater', english: 'water heater', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-024', hanzi: '洗衣機', pinyin: 'xǐyījī', indonesian: 'mesin cuci', english: 'washing machine', pos: 'noun', register: 'casual', scenario: 5 },
  { id: 's05-025', hanzi: '垃圾', pinyin: 'lèsè', indonesian: 'sampah', english: 'garbage / trash', pos: 'noun', register: 'casual', scenario: 5, taiwan_note: 'In Taiwan, garbage trucks play music; you must bring trash to the truck' },
  { id: 's05-026', hanzi: '垃圾車', pinyin: 'lèsè chē', indonesian: 'truk sampah', english: 'garbage truck', pos: 'noun', register: 'casual', scenario: 5, taiwan_note: 'Iconic Taiwan institution — plays Beethoven\'s Für Elise' },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd05-01',
    scenario: 5,
    title: 'Tanya sewa kamar',
    lines: [
      { speaker: 'Kamu', hanzi: '請問這個套房還有嗎？', pinyin: 'Qǐng wèn zhège tàofáng hái yǒu ma?', indonesian: 'Permisi, studio ini masih tersedia?' },
      { speaker: 'Landlord', hanzi: '有，租金一個月一萬兩千元。', pinyin: 'Yǒu, zūjīn yīgè yuè yī wàn liǎng qiān yuán.', indonesian: 'Ada, sewanya dua belas ribu dolar per bulan.' },
      { speaker: 'Kamu', hanzi: '有沒有包水電？', pinyin: 'Yǒu méiyǒu bāo shuǐdiàn?', indonesian: 'Sudah termasuk air dan listrik?' },
      { speaker: 'Landlord', hanzi: '電費另計，水費包含。', pinyin: 'Diànfèi lìng jì, shuǐfèi bāohán.', indonesian: 'Listrik dihitung terpisah, air sudah termasuk.' },
      { speaker: 'Kamu', hanzi: '可以看房嗎？', pinyin: 'Kěyǐ kàn fáng ma?', indonesian: 'Bisa survei kamarnya?' },
    ],
  },
  {
    id: 'd05-02',
    scenario: 5,
    title: 'Laporkan kerusakan ke landlord',
    lines: [
      { speaker: 'Kamu', hanzi: '房東，我的冷氣壞掉了。', pinyin: 'Fángdōng, wǒ de lěngqì huài diào le.', indonesian: 'Pak/Bu landlord, AC saya rusak.' },
      { speaker: 'Landlord', hanzi: '什麼時候壞的？', pinyin: 'Shénme shíhòu huài de?', indonesian: 'Kapan rusaknya?' },
      { speaker: 'Kamu', hanzi: '昨天晚上就不冷了。', pinyin: 'Zuótiān wǎnshàng jiù bù lěng le.', indonesian: 'Dari semalam sudah tidak dingin.' },
      { speaker: 'Landlord', hanzi: '好，我明天派人來修。', pinyin: 'Hǎo, wǒ míngtiān pài rén lái xiū.', indonesian: 'Baik, besok saya kirim orang untuk memperbaiki.' },
    ],
  },
  {
    id: 'd05-03',
    scenario: 5,
    title: 'Tanya tentang sampah',
    lines: [
      { speaker: 'Kamu', hanzi: '請問垃圾要怎麼丟？', pinyin: 'Qǐng wèn lèsè yào zěnme diū?', indonesian: 'Permisi, sampah dibuang bagaimana?' },
      { speaker: 'Tetangga', hanzi: '要等垃圾車來才能丟。', pinyin: 'Yào děng lèsè chē lái cái néng diū.', indonesian: 'Harus tunggu truk sampah datang baru boleh buang.' },
      { speaker: 'Kamu', hanzi: '垃圾車幾點來？', pinyin: 'Lèsè chē jǐ diǎn lái?', indonesian: 'Truk sampah datang jam berapa?' },
      { speaker: 'Tetangga', hanzi: '每天晚上八點左右，你會聽到音樂聲。', pinyin: 'Měitiān wǎnshàng bā diǎn zuǒyòu, nǐ huì tīng dào yīnyuè shēng.', indonesian: 'Setiap malam sekitar jam delapan, kamu akan dengar suara musik.' },
    ],
  },
  {
    id: 'd05-04',
    scenario: 5,
    title: 'Perpanjang kontrak',
    lines: [
      { speaker: 'Kamu', hanzi: '房東，我想續租。', pinyin: 'Fángdōng, wǒ xiǎng xù zū.', indonesian: 'Pak/Bu landlord, saya mau perpanjang sewa.' },
      { speaker: 'Landlord', hanzi: '好，要再簽幾個月？', pinyin: 'Hǎo, yào zài qiān jǐ gè yuè?', indonesian: 'Baik, mau perpanjang berapa bulan lagi?' },
      { speaker: 'Kamu', hanzi: '六個月，租金一樣嗎？', pinyin: 'Liù gè yuè, zūjīn yīyàng ma?', indonesian: 'Enam bulan, sewanya sama?' },
      { speaker: 'Landlord', hanzi: '一樣，我幫你準備合約。', pinyin: 'Yīyàng, wǒ bāng nǐ zhǔnbèi héyuē.', indonesian: 'Sama, saya siapkan kontraknya untuk kamu.' },
    ],
  },
  {
    id: 'd05-05',
    scenario: 5,
    title: 'Tanya lokasi sewa',
    lines: [
      { speaker: 'Kamu', hanzi: '請問這裡走路到捷運站要幾分鐘？', pinyin: 'Qǐng wèn zhèlǐ zǒulù dào jiéyùn zhàn yào jǐ fēnzhōng?', indonesian: 'Permisi, dari sini jalan kaki ke stasiun MRT berapa menit?' },
      { speaker: 'Landlord', hanzi: '大概十分鐘。附近也有超商和全聯。', pinyin: 'Dàgài shí fēnzhōng. Fùjìn yě yǒu chāoshāng hé Quánlián.', indonesian: 'Kira-kira sepuluh menit. Di dekat sini juga ada minimarket dan PX Mart.' },
      { speaker: 'Kamu', hanzi: '好，那很方便。', pinyin: 'Hǎo, nà hěn fāngbiàn.', indonesian: 'Bagus, itu sangat nyaman.' },
    ],
  },
]
