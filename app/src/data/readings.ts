export interface GlossedWord {
  hanzi: string
  pinyin: string
  indonesian: string
}

export interface ReadingArticle {
  id: string
  title: string
  titlePinyin: string
  titleIndonesian: string
  category: string
  paragraphs: ReadingParagraph[]
}

export interface ReadingParagraph {
  // Each paragraph is an array of segments — either plain text or a glossed word
  segments: (string | GlossedWord)[]
}

// Helper to make a glossed word
function w(hanzi: string, pinyin: string, indonesian: string): GlossedWord {
  return { hanzi, pinyin, indonesian }
}

export const READINGS: ReadingArticle[] = [
  {
    id: 'r01',
    title: '台灣的早餐文化',
    titlePinyin: 'Táiwān de zǎocān wénhuà',
    titleIndonesian: 'Budaya Sarapan Taiwan',
    category: 'Makanan',
    paragraphs: [
      {
        segments: [
          '在台灣，',
          w('早餐店', 'zǎocān diàn', 'warung sarapan'),
          '是非常普遍的。台灣人',
          w('喜歡', 'xǐhuān', 'suka'),
          '在早餐店吃',
          w('蛋餅', 'dàn bǐng', 'crepe telur'),
          '、',
          w('三明治', 'sānmíngzhì', 'sandwich'),
          '，配上一杯',
          w('豆漿', 'dòujiāng', 'susu kedelai'),
          '或奶茶。',
        ],
      },
      {
        segments: [
          '早餐店通常在',
          w('清晨', 'qīngchén', 'dini hari / subuh'),
          '六點就開始',
          w('營業', 'yíngyè', 'buka (usaha)'),
          '，到早上十一點左右',
          w('關門', 'guānmén', 'tutup'),
          '。很多上班族和學生會在上班、上學前來這裡',
          w('外帶', 'wàidài', 'beli dibawa pulang'),
          '早餐。',
        ],
      },
      {
        segments: [
          '常見的早餐有：',
          w('蛋餅', 'dàn bǐng', 'crepe telur'),
          '、',
          w('燒餅油條', 'shāobǐng yóutiáo', 'roti sesame + cakwe'),
          '、',
          w('饅頭', 'mántou', 'roti kukus polos'),
          '夾蛋，還有各種',
          w('土司', 'tǔsī', 'roti tawar'),
          '。價格非常',
          w('便宜', 'piányí', 'murah'),
          '，一份大概二三十元台幣就可以',
          w('吃飽', 'chī bǎo', 'kenyang'),
          '了。',
        ],
      },
    ],
  },
  {
    id: 'r02',
    title: '台灣的夜市',
    titlePinyin: 'Táiwān de yèshì',
    titleIndonesian: 'Pasar Malam Taiwan',
    category: 'Budaya',
    paragraphs: [
      {
        segments: [
          w('夜市', 'yèshì', 'pasar malam'),
          '是台灣最有名的',
          w('文化特色', 'wénhuà tèsè', 'ciri khas budaya'),
          '之一。每個城市都有自己的夜市，台北最有名的是',
          w('士林夜市', 'Shìlín Yèshì', 'Pasar Malam Shilin'),
          '和',
          w('饒河夜市', 'Ráohé Yèshì', 'Pasar Malam Raohe'),
          '。',
        ],
      },
      {
        segments: [
          '在夜市裡，你可以找到各種',
          w('小吃', 'xiǎochī', 'jajanan / makanan kecil'),
          '，比如',
          w('臭豆腐', 'chòu dòufu', 'tahu busuk fermentasi'),
          '、',
          w('鹽酥雞', 'yán sū jī', 'ayam goreng krispi'),
          '、',
          w('蚵仔煎', 'é zǐ jiān', 'martabak tiram'),
          '，還有各種',
          w('飲料', 'yǐnliào', 'minuman'),
          '。',
        ],
      },
      {
        segments: [
          '夜市不只是吃東西的地方，也有很多',
          w('遊戲攤', 'yóuxì tān', 'stan permainan'),
          '和',
          w('服飾', 'fúshì', 'pakaian'),
          '攤位。很多台灣年輕人喜歡在',
          w('週末', 'zhōumò', 'akhir pekan'),
          '去夜市和朋友',
          w('逛逛', 'guàngguàng', 'jalan-jalan / cuci mata'),
          '，是一種很重要的',
          w('社交活動', 'shèjiāo huódòng', 'kegiatan sosial'),
          '。',
        ],
      },
    ],
  },
  {
    id: 'r03',
    title: '悠遊卡的使用方式',
    titlePinyin: 'Yōuyóu kǎ de shǐyòng fāngshì',
    titleIndonesian: 'Cara Pakai EasyCard',
    category: 'Transportasi',
    paragraphs: [
      {
        segments: [
          w('悠遊卡', 'Yōuyóu Kǎ', 'EasyCard'),
          '是台灣最常用的',
          w('電子票證', 'diànzǐ piào zhèng', 'kartu elektronik prabayar'),
          '。你可以用它',
          w('搭乘', 'dāchéng', 'naik (transportasi)'),
          w('捷運', 'jiéyùn', 'MRT'),
          '、',
          w('公車', 'gōngchē', 'bus kota'),
          '、',
          w('高鐵', 'gāotiě', 'HSR'),
          '，還可以在便利商店和很多',
          w('商店', 'shāngdiàn', 'toko'),
          '付款。',
        ],
      },
      {
        segments: [
          '如果卡裡的',
          w('餘額', 'yú\'é', 'saldo'),
          '不夠了，可以在捷運站、便利商店或',
          w('郵局', 'yóujú', 'kantor pos'),
          '進行',
          w('儲值', 'chǔzhí', 'isi ulang'),
          '。',
          w('儲值', 'chǔzhí', 'isi ulang'),
          '最低一百元，最高一千元。',
        ],
      },
      {
        segments: [
          '使用捷運時，',
          w('搭乘', 'dāchéng', 'naik'),
          '前需要把悠遊卡',
          w('感應', 'gǎnyìng', 'tap / tempelkan'),
          '在',
          w('閘門', 'zhámén', 'pintu gerbang'),
          '上，',
          w('下車', 'xià chē', 'turun'),
          '時也要再',
          w('感應', 'gǎnyìng', 'tap'),
          '一次。這樣系統才能正確',
          w('扣款', 'kòukuǎn', 'memotong saldo'),
          '。',
        ],
      },
    ],
  },
]
