import type { VocabEntry, Dialogue } from '../types'

export const vocab: VocabEntry[] = [
  // --- Basics ---
  { id: 's01-001', hanzi: '吃飯', pinyin: 'chī fàn', indonesian: 'makan', english: 'to eat (a meal)', pos: 'verb', register: 'casual', scenario: 1 },
  { id: 's01-002', hanzi: '喝', pinyin: 'hē', indonesian: 'minum', english: 'to drink', pos: 'verb', register: 'casual', scenario: 1 },
  { id: 's01-003', hanzi: '好吃', pinyin: 'hǎo chī', indonesian: 'enak / lezat', english: 'delicious', pos: 'adjective', register: 'casual', scenario: 1 },
  { id: 's01-004', hanzi: '好喝', pinyin: 'hǎo hē', indonesian: 'enak (minuman)', english: 'tasty (drinks)', pos: 'adjective', register: 'casual', scenario: 1 },
  { id: 's01-005', hanzi: '餓', pinyin: 'è', indonesian: 'lapar', english: 'hungry', pos: 'adjective', register: 'casual', scenario: 1 },
  { id: 's01-006', hanzi: '渴', pinyin: 'kě', indonesian: 'haus', english: 'thirsty', pos: 'adjective', register: 'casual', scenario: 1 },
  { id: 's01-007', hanzi: '飽', pinyin: 'bǎo', indonesian: 'kenyang', english: 'full (after eating)', pos: 'adjective', register: 'casual', scenario: 1 },

  // --- Ordering ---
  { id: 's01-010', hanzi: '點餐', pinyin: 'diǎn cān', indonesian: 'pesan makanan', english: 'to order food', pos: 'verb', register: 'casual', scenario: 1 },
  { id: 's01-011', hanzi: '我要', pinyin: 'wǒ yào', indonesian: 'saya mau', english: 'I want / I\'ll have', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-012', hanzi: '外帶', pinyin: 'wài dài', indonesian: 'bungkus / dibawa pulang', english: 'takeaway', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Standard Taiwan term for takeout' },
  { id: 's01-013', hanzi: '內用', pinyin: 'nèi yòng', indonesian: 'makan di tempat', english: 'dine in', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-014', hanzi: '幾位？', pinyin: 'jǐ wèi？', indonesian: 'berapa orang?', english: 'how many people?', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-015', hanzi: '一個人', pinyin: 'yí gè rén', indonesian: 'sendiri / satu orang', english: 'just one person', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-016', hanzi: '兩個人', pinyin: 'liǎng gè rén', indonesian: 'dua orang', english: 'two people', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-017', hanzi: '菜單', pinyin: 'cài dān', indonesian: 'menu', english: 'menu', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-018', hanzi: '這個', pinyin: 'zhè gè', indonesian: 'yang ini', english: 'this one', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-019', hanzi: '那個', pinyin: 'nà gè', indonesian: 'yang itu', english: 'that one', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-020', hanzi: '一樣的', pinyin: 'yí yàng de', indonesian: 'yang sama', english: 'the same thing', pos: 'phrase', register: 'casual', scenario: 1 },

  // --- Payment ---
  { id: 's01-030', hanzi: '結帳', pinyin: 'jié zhàng', indonesian: 'bayar / minta nota', english: 'to pay / check please', pos: 'verb', register: 'casual', scenario: 1 },
  { id: 's01-031', hanzi: '多少錢？', pinyin: 'duō shǎo qián？', indonesian: 'berapa harganya?', english: 'how much?', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-032', hanzi: '刷卡', pinyin: 'shuā kǎ', indonesian: 'bayar pakai kartu', english: 'pay by card', pos: 'verb', register: 'casual', scenario: 1 },
  { id: 's01-033', hanzi: '付現', pinyin: 'fù xiàn', indonesian: 'bayar tunai', english: 'pay cash', pos: 'verb', register: 'casual', scenario: 1 },
  { id: 's01-034', hanzi: '找錢', pinyin: 'zhǎo qián', indonesian: 'kembalian', english: 'change (money back)', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-035', hanzi: '發票', pinyin: 'fā piào', indonesian: 'struk / faktur', english: 'receipt / invoice', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Taiwan uniform invoice — also a lottery ticket!' },

  // --- Food types ---
  { id: 's01-040', hanzi: '便當', pinyin: 'biàn dāng', indonesian: 'kotak makan / bento', english: 'bento box lunch', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Ubiquitous in Taiwan; from Japanese 弁当' },
  { id: 's01-041', hanzi: '滷肉飯', pinyin: 'lǔ ròu fàn', indonesian: 'nasi babi semur Taiwan', english: 'braised pork rice', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Iconic Taiwanese comfort food' },
  { id: 's01-042', hanzi: '牛肉麵', pinyin: 'niú ròu miàn', indonesian: 'mie sapi', english: 'beef noodle soup', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-043', hanzi: '小籠包', pinyin: 'xiǎo lóng bāo', indonesian: 'bakpao kuah kecil', english: 'soup dumplings', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-044', hanzi: '臭豆腐', pinyin: 'chòu dòu fu', indonesian: 'tahu fermentasi berbau', english: 'stinky tofu', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-045', hanzi: '蚵仔煎', pinyin: 'é zǐ jiān', indonesian: 'martabak tiram Taiwan', english: 'oyster omelette', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-046', hanzi: '珍珠奶茶', pinyin: 'zhēn zhū nǎi chá', indonesian: 'bubble tea / boba', english: 'bubble milk tea', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Invented in Taiwan' },
  { id: 's01-047', hanzi: '豆漿', pinyin: 'dòu jiāng', indonesian: 'susu kedelai', english: 'soy milk', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-048', hanzi: '燒餅油條', pinyin: 'shāo bǐng yóu tiáo', indonesian: 'roti sesame + cakwe', english: 'sesame flatbread + fried dough', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Classic Taiwanese breakfast combo' },

  // --- Drinks / bubble tea customization ---
  { id: 's01-050', hanzi: '幾分糖？', pinyin: 'jǐ fēn táng？', indonesian: 'berapa kadar gula?', english: 'how sweet? (sugar level)', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-051', hanzi: '全糖', pinyin: 'quán táng', indonesian: 'gula penuh (100%)', english: 'full sugar', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-052', hanzi: '半糖', pinyin: 'bàn táng', indonesian: 'setengah gula (50%)', english: 'half sugar', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-053', hanzi: '少糖', pinyin: 'shǎo táng', indonesian: 'sedikit gula (30%)', english: 'less sugar', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-054', hanzi: '無糖', pinyin: 'wú táng', indonesian: 'tanpa gula', english: 'no sugar', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-055', hanzi: '去冰', pinyin: 'qù bīng', indonesian: 'tanpa es', english: 'no ice', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-056', hanzi: '少冰', pinyin: 'shǎo bīng', indonesian: 'sedikit es', english: 'less ice', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-057', hanzi: '正常冰', pinyin: 'zhèng cháng bīng', indonesian: 'es normal', english: 'normal ice', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-058', hanzi: '熱的', pinyin: 'rè de', indonesian: 'yang panas', english: 'hot', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-059', hanzi: '冷的', pinyin: 'lěng de', indonesian: 'yang dingin', english: 'cold', pos: 'phrase', register: 'casual', scenario: 1 },

  // --- Night market ---
  { id: 's01-060', hanzi: '夜市', pinyin: 'yè shì', indonesian: 'pasar malam', english: 'night market', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Central to Taiwanese social life' },
  { id: 's01-061', hanzi: '攤位', pinyin: 'tān wèi', indonesian: 'stan / lapak', english: 'stall / booth', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-062', hanzi: '排隊', pinyin: 'pái duì', indonesian: 'antri', english: 'to queue', pos: 'verb', register: 'casual', scenario: 1 },
  { id: 's01-063', hanzi: '等一下', pinyin: 'děng yī xià', indonesian: 'tunggu sebentar', english: 'wait a moment', pos: 'phrase', register: 'casual', scenario: 1 },

  // --- Dietary ---
  { id: 's01-070', hanzi: '素食', pinyin: 'sù shí', indonesian: 'vegetarian', english: 'vegetarian food', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Taiwan has abundant vegetarian options' },
  { id: 's01-071', hanzi: '不吃肉', pinyin: 'bù chī ròu', indonesian: 'tidak makan daging', english: 'don\'t eat meat', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-072', hanzi: '辣', pinyin: 'là', indonesian: 'pedas', english: 'spicy', pos: 'adjective', register: 'casual', scenario: 1 },
  { id: 's01-073', hanzi: '不要辣', pinyin: 'bù yào là', indonesian: 'jangan pedas', english: 'no spice please', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-074', hanzi: '過敏', pinyin: 'guò mǐn', indonesian: 'alergi', english: 'allergy', pos: 'noun', register: 'casual', scenario: 1 },

  // --- Breakfast items (早餐類) ---
  { id: 's01-100', hanzi: '蛋餅', pinyin: 'dàn bǐng', indonesian: 'crepe telur', english: 'egg crepe', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Most popular Taiwanese breakfast item — soft rolled crepe with egg' },
  { id: 's01-101', hanzi: '三明治', pinyin: 'sānmíngzhì', indonesian: 'sandwich', english: 'sandwich', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-102', hanzi: '吐司', pinyin: 'tǔsī', indonesian: 'roti tawar', english: 'toast / bread', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-103', hanzi: '饅頭', pinyin: 'mántou', indonesian: 'roti kukus polos', english: 'steamed bun (plain)', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-104', hanzi: '包子', pinyin: 'bāozi', indonesian: 'bakpao isi', english: 'filled steamed bun', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-105', hanzi: '蘿蔔糕', pinyin: 'luóbo gāo', indonesian: 'kue lobak goreng', english: 'radish cake (pan-fried)', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Pan-fried turnip cake, common at breakfast shops' },
  { id: 's01-106', hanzi: '飯糰', pinyin: 'fàntuán', indonesian: 'onigiri / nasi gulung Taiwan', english: 'rice roll', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Taiwan rice roll is bigger than Japanese onigiri, with fillings inside' },
  { id: 's01-107', hanzi: '鐵板麵', pinyin: 'tiěbǎn miàn', indonesian: 'mie hot plate', english: 'hot plate noodles', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-108', hanzi: '魯蛋', pinyin: 'lǔ dàn', indonesian: 'telur semur', english: 'braised egg', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-109', hanzi: '荷包蛋', pinyin: 'hébāo dàn', indonesian: 'telur mata sapi', english: 'fried egg (sunny side up)', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-110', hanzi: '炒蛋', pinyin: 'chǎo dàn', indonesian: 'telur orak-arik', english: 'scrambled egg', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-111', hanzi: '鹹豆漿', pinyin: 'xián dòujiāng', indonesian: 'susu kedelai asin (panas)', english: 'savory soy milk', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Hot soy milk with vinegar, dried shrimp, and you-tiao — traditional Taiwanese breakfast' },
  { id: 's01-112', hanzi: '米漿', pinyin: 'mǐ jiāng', indonesian: 'susu beras', english: 'rice milk', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-113', hanzi: '奶茶', pinyin: 'nǎi chá', indonesian: 'teh susu / milk tea', english: 'milk tea', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-114', hanzi: '紅茶', pinyin: 'hóng chá', indonesian: 'teh hitam', english: 'black tea', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-115', hanzi: '綠茶', pinyin: 'lǜ chá', indonesian: 'teh hijau', english: 'green tea', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-116', hanzi: '鮮奶茶', pinyin: 'xiān nǎi chá', indonesian: 'teh susu segar', english: 'fresh milk tea', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-117', hanzi: '咖啡', pinyin: 'kāfēi', indonesian: 'kopi', english: 'coffee', pos: 'noun', register: 'casual', scenario: 1 },

  // --- Drink temperature & sweetness (extended) ---
  { id: 's01-120', hanzi: '微糖', pinyin: 'wēi táng', indonesian: 'sedikit sekali gula (20%)', english: 'little sugar (20%)', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: '微糖 is even less sweet than 少糖' },
  { id: 's01-121', hanzi: '七分糖', pinyin: 'qī fēn táng', indonesian: 'gula 70%', english: '70% sugar', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-122', hanzi: '三分糖', pinyin: 'sān fēn táng', indonesian: 'gula 30%', english: '30% sugar', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-123', hanzi: '溫的', pinyin: 'wēn de', indonesian: 'yang hangat', english: 'warm', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-124', hanzi: '常溫', pinyin: 'cháng wēn', indonesian: 'suhu ruangan (tanpa es)', english: 'room temperature', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-125', hanzi: '微冰', pinyin: 'wēi bīng', indonesian: 'sedikit sekali es', english: 'barely any ice', pos: 'phrase', register: 'casual', scenario: 1 },

  // --- Bubble tea toppings (加料) ---
  { id: 's01-130', hanzi: '加料', pinyin: 'jiā liào', indonesian: 'tambah topping', english: 'add toppings', pos: 'verb', register: 'casual', scenario: 1 },
  { id: 's01-131', hanzi: '珍珠', pinyin: 'zhēnzhū', indonesian: 'boba / tapioka', english: 'tapioca pearls (boba)', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Also called 粉圓 (fěnyuán) in some shops' },
  { id: 's01-132', hanzi: '波霸', pinyin: 'bōbà', indonesian: 'boba besar', english: 'large tapioca pearls', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: '波霸 are bigger and chewier than regular 珍珠' },
  { id: 's01-133', hanzi: '布丁', pinyin: 'bùdīng', indonesian: 'puding', english: 'pudding (topping)', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-134', hanzi: '椰果', pinyin: 'yēguǒ', indonesian: 'nata de coco', english: 'coconut jelly', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-135', hanzi: '仙草', pinyin: 'xiāncǎo', indonesian: 'cincau hitam', english: 'grass jelly', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-136', hanzi: '芋圓', pinyin: 'yùyuán', indonesian: 'bola talas / taro ball', english: 'taro ball', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Specialty from Jiufen — chewy taro and sweet potato balls' },
  { id: 's01-137', hanzi: '紅豆', pinyin: 'hóngdòu', indonesian: 'kacang merah', english: 'red bean', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-138', hanzi: '燕麥', pinyin: 'yànmài', indonesian: 'oat', english: 'oats', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-139', hanzi: '不要加料', pinyin: 'bú yào jiā liào', indonesian: 'tidak usah tambah topping', english: 'no toppings', pos: 'phrase', register: 'casual', scenario: 1 },

  // --- 優惠 / Discounts & receipts ---
  { id: 's01-140', hanzi: '有優惠嗎？', pinyin: 'yǒu yōuhuì ma?', indonesian: 'ada promo / diskon?', english: 'any discounts / deals?', pos: 'phrase', register: 'casual', scenario: 1, taiwan_note: 'Very common question — shops often have 買一送一 or app discounts' },
  { id: 's01-141', hanzi: '優惠', pinyin: 'yōuhuì', indonesian: 'promo / diskon / keuntungan', english: 'discount / special offer', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-142', hanzi: '買一送一', pinyin: 'mǎi yī sòng yī', indonesian: 'beli satu gratis satu', english: 'buy one get one free', pos: 'phrase', register: 'casual', scenario: 1, taiwan_note: 'Extremely common in Taiwan, especially at drink shops on certain days' },
  { id: 's01-143', hanzi: '集點', pinyin: 'jí diǎn', indonesian: 'kumpulkan poin / stamp', english: 'collect loyalty points', pos: 'verb', register: 'casual', scenario: 1, taiwan_note: '集點 cards at 7-11 and FamilyMart are a big deal in Taiwan culture' },
  { id: 's01-144', hanzi: '點數', pinyin: 'diǎnshù', indonesian: 'poin', english: 'points (loyalty)', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-145', hanzi: '會員優惠', pinyin: 'huìyuán yōuhuì', indonesian: 'diskon member', english: 'member discount', pos: 'phrase', register: 'casual', scenario: 1 },
  { id: 's01-146', hanzi: '折扣', pinyin: 'zhékòu', indonesian: 'diskon', english: 'discount', pos: 'noun', register: 'casual', scenario: 1 },
  { id: 's01-147', hanzi: '打八折', pinyin: 'dǎ bā zhé', indonesian: 'diskon 20% (bayar 80%)', english: '20% off (pay 80%)', pos: 'phrase', register: 'casual', scenario: 1, taiwan_note: 'Taiwan discounts work backwards — 八折 means pay 80%, not get 80% off' },
  { id: 's01-148', hanzi: '需要發票嗎？', pinyin: 'xūyào fāpiào ma?', indonesian: 'perlu faktur / struk pajak?', english: 'do you need an invoice?', pos: 'phrase', register: 'casual', scenario: 1, taiwan_note: 'Asked at every register — Taiwan uniform invoices double as lottery tickets' },
  { id: 's01-149', hanzi: '統一發票', pinyin: 'tǒngyī fāpiào', indonesian: 'struk pajak seragam Taiwan', english: 'Taiwan uniform invoice', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Government-mandated receipt — has a lottery number printed on it, drawn every 2 months' },
  { id: 's01-150', hanzi: '電子發票', pinyin: 'diànzǐ fāpiào', indonesian: 'struk elektronik (e-invoice)', english: 'electronic invoice', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: 'Can be stored on EasyCard or phone instead of paper' },
  { id: 's01-151', hanzi: '載具', pinyin: 'zàijù', indonesian: 'dompet e-invoice (carrier)', english: 'invoice carrier (digital wallet)', pos: 'noun', register: 'casual', scenario: 1, taiwan_note: '載具 stores your e-invoices digitally — link with EasyCard or phone number' },
  { id: 's01-152', hanzi: '不用發票', pinyin: 'bú yòng fāpiào', indonesian: 'tidak perlu struk', english: 'no receipt needed', pos: 'phrase', register: 'casual', scenario: 1 },

  // --- Particles (Taiwan flavor) ---
  { id: 's01-090', hanzi: '啦', pinyin: 'la', indonesian: '(partikel penegas/santai)', english: '(softening / friendly particle)', pos: 'particle', register: 'casual', scenario: 1, tags: ['Taiwan'], taiwan_note: '好吃啦 = so good! Very common in casual speech' },
  { id: 's01-091', hanzi: '喔', pinyin: 'o', indonesian: '(partikel informasi baru)', english: '(new info / mild surprise particle)', pos: 'particle', register: 'casual', scenario: 1, tags: ['Taiwan'] },
]

export const dialogues: Dialogue[] = [
  {
    id: 'd01-01',
    scenario: 1,
    title: 'Di toko sarapan (早餐店)',
    lines: [
      { speaker: 'Penjual', hanzi: '你好，要吃什麼？', pinyin: 'Nǐ hǎo, yào chī shén me?', indonesian: 'Halo, mau makan apa?' },
      { speaker: 'Kamu', hanzi: '我要一個蛋餅和豆漿。', pinyin: 'Wǒ yào yí gè dàn bǐng hé dòu jiāng.', indonesian: 'Saya mau satu crepe telur dan susu kedelai.' },
      { speaker: 'Penjual', hanzi: '內用還是外帶？', pinyin: 'Nèi yòng hái shì wài dài?', indonesian: 'Makan di sini atau dibawa pulang?' },
      { speaker: 'Kamu', hanzi: '外帶。謝謝！', pinyin: 'Wài dài. Xiè xiè!', indonesian: 'Dibawa pulang. Terima kasih!' },
    ],
  },
  {
    id: 'd01-02',
    scenario: 1,
    title: 'Memesan bubble tea',
    lines: [
      { speaker: 'Penjual', hanzi: '你好，請問要什麼？', pinyin: 'Nǐ hǎo, qǐng wèn yào shén me?', indonesian: 'Halo, mau pesan apa?' },
      { speaker: 'Kamu', hanzi: '一杯珍珠奶茶，半糖去冰。', pinyin: 'Yì bēi zhēn zhū nǎi chá, bàn táng qù bīng.', indonesian: 'Satu bubble milk tea, setengah gula tanpa es.' },
      { speaker: 'Penjual', hanzi: '好，五十元。', pinyin: 'Hǎo, wǔ shí yuán.', indonesian: 'Oke, lima puluh dolar Taiwan.' },
      { speaker: 'Kamu', hanzi: '刷卡可以嗎？', pinyin: 'Shuā kǎ kě yǐ ma?', indonesian: 'Bisa bayar pakai kartu?' },
      { speaker: 'Penjual', hanzi: '可以喔！', pinyin: 'Kě yǐ o!', indonesian: 'Bisa dong!' },
    ],
  },
  {
    id: 'd01-03',
    scenario: 1,
    title: 'Di restoran — minta menu & bayar',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，菜單在哪裡？', pinyin: 'Bù hǎo yì si, cài dān zài nǎ lǐ?', indonesian: 'Permisi, menunya di mana?' },
      { speaker: 'Pelayan', hanzi: '在這裡，請。', pinyin: 'Zài zhè lǐ, qǐng.', indonesian: 'Di sini, silakan.' },
      { speaker: 'Kamu', hanzi: '（selesai makan）結帳，謝謝。', pinyin: 'Jié zhàng, xiè xiè.', indonesian: 'Minta tagihan, terima kasih.' },
      { speaker: 'Pelayan', hanzi: '好的，一共兩百八十元。', pinyin: 'Hǎo de, yígòng liǎng bǎi bā shí yuán.', indonesian: 'Baik, totalnya dua ratus delapan puluh dolar.' },
      { speaker: 'Kamu', hanzi: '付現。這是三百元。', pinyin: 'Fù xiàn. Zhè shì sān bǎi yuán.', indonesian: 'Bayar tunai. Ini tiga ratus dolar.' },
    ],
  },
  {
    id: 'd01-04',
    scenario: 1,
    title: 'Di pasar malam — beli makanan',
    lines: [
      { speaker: 'Kamu', hanzi: '老闆，這個多少錢？', pinyin: 'Lǎobǎn, zhège duōshǎo qián?', indonesian: 'Bos, yang ini berapa harganya?' },
      { speaker: 'Penjual', hanzi: '一份五十元。', pinyin: 'Yī fèn wǔ shí yuán.', indonesian: 'Satu porsi lima puluh dolar.' },
      { speaker: 'Kamu', hanzi: '好，我要兩份。', pinyin: 'Hǎo, wǒ yào liǎng fèn.', indonesian: 'Oke, saya mau dua porsi.' },
      { speaker: 'Penjual', hanzi: '等一下，馬上好。', pinyin: 'Děng yīxià, mǎshàng hǎo.', indonesian: 'Tunggu sebentar, sebentar lagi siap.' },
      { speaker: 'Kamu', hanzi: '謝謝！好吃啦！', pinyin: 'Xiè xiè! Hǎo chī la!', indonesian: 'Terima kasih! Enak banget!' },
    ],
  },
  {
    id: 'd01-05',
    scenario: 1,
    title: 'Tanya makanan vegetarian',
    lines: [
      { speaker: 'Kamu', hanzi: '不好意思，請問這個有肉嗎？', pinyin: 'Bù hǎo yì si, qǐng wèn zhège yǒu ròu ma?', indonesian: 'Permisi, yang ini ada dagingnya?' },
      { speaker: 'Pelayan', hanzi: '有，裡面有豬肉。', pinyin: 'Yǒu, lǐmiàn yǒu zhūròu.', indonesian: 'Ada, dalamnya ada daging babi.' },
      { speaker: 'Kamu', hanzi: '我不吃肉，有素食的嗎？', pinyin: 'Wǒ bù chī ròu, yǒu sùshí de ma?', indonesian: 'Saya tidak makan daging, ada yang vegetarian?' },
      { speaker: 'Pelayan', hanzi: '有喔，這個和這個都是素的。', pinyin: 'Yǒu o, zhège hé zhège dōu shì sù de.', indonesian: 'Ada, yang ini dan yang ini semuanya vegetarian.' },
      { speaker: 'Kamu', hanzi: '好，那我要這個。謝謝。', pinyin: 'Hǎo, nà wǒ yào zhège. Xiè xiè.', indonesian: 'Oke, kalau begitu saya mau yang ini. Terima kasih.' },
    ],
  },
  {
    id: 'd01-06',
    scenario: 1,
    title: 'Pesan makanan pedas',
    lines: [
      { speaker: 'Pelayan', hanzi: '你好，請問要點什麼？', pinyin: 'Nǐ hǎo, qǐng wèn yào diǎn shénme?', indonesian: 'Halo, mau pesan apa?' },
      { speaker: 'Kamu', hanzi: '我要一碗牛肉麵，可以不要辣嗎？', pinyin: 'Wǒ yào yī wǎn niúròu miàn, kěyǐ bù yào là ma?', indonesian: 'Saya mau semangkuk mie sapi, bisa tidak pedas?' },
      { speaker: 'Pelayan', hanzi: '沒問題，不加辣。還要什麼嗎？', pinyin: 'Méi wèntí, bù jiā là. Hái yào shénme ma?', indonesian: 'Tidak masalah, tidak ditambah cabai. Mau pesan lagi?' },
      { speaker: 'Kamu', hanzi: '再來一杯熱豆漿。', pinyin: 'Zài lái yī bēi rè dòujiāng.', indonesian: 'Tambah satu gelas susu kedelai panas.' },
    ],
  },
  {
    id: 'd01-07',
    scenario: 1,
    title: 'Pesan bubble tea — lengkap dengan topping',
    lines: [
      { speaker: 'Penjual', hanzi: '你好，要喝什麼？', pinyin: 'Nǐ hǎo, yào hē shénme?', indonesian: 'Halo, mau minum apa?' },
      { speaker: 'Kamu', hanzi: '一杯鮮奶茶，半糖去冰。', pinyin: 'Yī bēi xiān nǎi chá, bàn táng qù bīng.', indonesian: 'Satu fresh milk tea, setengah gula tanpa es.' },
      { speaker: 'Penjual', hanzi: '要加料嗎？', pinyin: 'Yào jiā liào ma?', indonesian: 'Mau tambah topping?' },
      { speaker: 'Kamu', hanzi: '加珍珠和仙草。', pinyin: 'Jiā zhēnzhū hé xiāncǎo.', indonesian: 'Tambah boba dan cincau hitam.' },
      { speaker: 'Penjual', hanzi: '好，一共八十五元。', pinyin: 'Hǎo, yígòng bāshíwǔ yuán.', indonesian: 'Oke, totalnya delapan puluh lima dolar.' },
      { speaker: 'Penjual', hanzi: '需要發票嗎？', pinyin: 'Xūyào fāpiào ma?', indonesian: 'Perlu struk pajak?' },
      { speaker: 'Kamu', hanzi: '不用，謝謝。', pinyin: 'Bú yòng, xiè xiè.', indonesian: 'Tidak perlu, terima kasih.' },
    ],
  },
  {
    id: 'd01-08',
    scenario: 1,
    title: 'Tanya promo & kumpul poin',
    lines: [
      { speaker: 'Kamu', hanzi: '請問現在有優惠嗎？', pinyin: 'Qǐng wèn xiànzài yǒu yōuhuì ma?', indonesian: 'Permisi, sekarang ada promo?' },
      { speaker: 'Penjual', hanzi: '有喔，今天買一送一！', pinyin: 'Yǒu o, jīntiān mǎi yī sòng yī!', indonesian: 'Ada, hari ini beli satu gratis satu!' },
      { speaker: 'Kamu', hanzi: '太好了！那我要兩杯珍珠奶茶。', pinyin: 'Tài hǎo le! Nà wǒ yào liǎng bēi zhēnzhū nǎichá.', indonesian: 'Wah bagus! Kalau begitu saya mau dua gelas bubble tea.' },
      { speaker: 'Penjual', hanzi: '有集點卡嗎？', pinyin: 'Yǒu jí diǎn kǎ ma?', indonesian: 'Ada kartu stamp / poin?' },
      { speaker: 'Kamu', hanzi: '有，幫我蓋章。謝謝！', pinyin: 'Yǒu, bāng wǒ gài zhāng. Xiè xiè!', indonesian: 'Ada, tolong stampel untuk saya. Terima kasih!' },
    ],
  },
  {
    id: 'd01-09',
    scenario: 1,
    title: 'Pesan sarapan — pilih telur',
    lines: [
      { speaker: 'Penjual', hanzi: '你好，要什麼？', pinyin: 'Nǐ hǎo, yào shénme?', indonesian: 'Halo, mau apa?' },
      { speaker: 'Kamu', hanzi: '一個蛋餅，加荷包蛋。', pinyin: 'Yí gè dàn bǐng, jiā hébāo dàn.', indonesian: 'Satu crepe telur, tambah telur mata sapi.' },
      { speaker: 'Penjual', hanzi: '好，要熱豆漿還是冷豆漿？', pinyin: 'Hǎo, yào rè dòujiāng háishi lěng dòujiāng?', indonesian: 'Oke, mau susu kedelai panas atau dingin?' },
      { speaker: 'Kamu', hanzi: '熱的，鹹豆漿。', pinyin: 'Rè de, xián dòujiāng.', indonesian: 'Yang panas, susu kedelai asin.' },
      { speaker: 'Penjual', hanzi: '好，三十五元。', pinyin: 'Hǎo, sānshíwǔ yuán.', indonesian: 'Baik, tiga puluh lima dolar.' },
      { speaker: 'Penjual', hanzi: '需要電子發票載具嗎？', pinyin: 'Xūyào diànzǐ fāpiào zàijù ma?', indonesian: 'Perlu e-invoice carrier?' },
      { speaker: 'Kamu', hanzi: '要，這是我的手機號碼。', pinyin: 'Yào, zhè shì wǒ de shǒujī hàomǎ.', indonesian: 'Perlu, ini nomor HP saya.' },
    ],
  },
]
