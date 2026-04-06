// CP-08 — Proper nouns deck (recognition only, no production drill)
// Stores, cities, attractions, transport from PRD §15
import type { VocabEntry } from '../types'

export const vocab: VocabEntry[] = [
  // Fast food
  { id: 'pl-001', hanzi: '麥當勞', pinyin: 'Màidāngláo', indonesian: 'McDonald\'s', english: 'McDonald\'s', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-002', hanzi: '肯德基', pinyin: 'Kěndéjī', indonesian: 'KFC', english: 'KFC', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-003', hanzi: '摩斯漢堡', pinyin: 'Mósī Hànbǎo', indonesian: 'MOS Burger', english: 'MOS Burger', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-004', hanzi: '漢堡王', pinyin: 'Hànbǎo Wáng', indonesian: 'Burger King', english: 'Burger King', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-005', hanzi: '必勝客', pinyin: 'Bìshèngkè', indonesian: 'Pizza Hut', english: 'Pizza Hut', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-006', hanzi: '鼎泰豐', pinyin: 'Dǐng Tài Fēng', indonesian: 'Din Tai Fung', english: 'Din Tai Fung', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },

  // Convenience stores
  { id: 'pl-010', hanzi: '統一超商', pinyin: 'Tǒngyī Chāoshāng', indonesian: '7-Eleven Taiwan', english: '7-Eleven Taiwan', pos: 'noun', register: 'casual', scenario: 0, taiwan_note: 'Most 7-Elevens in Taiwan are run by Uni-President', tags: ['Places'] },
  { id: 'pl-011', hanzi: '全家', pinyin: 'Quánjiā', indonesian: 'FamilyMart', english: 'FamilyMart', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-012', hanzi: '萊爾富', pinyin: 'Lái\'ěrfù', indonesian: 'Hi-Life', english: 'Hi-Life', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },

  // Supermarkets
  { id: 'pl-020', hanzi: '全聯', pinyin: 'Quánlián', indonesian: 'PX Mart', english: 'PX Mart', pos: 'noun', register: 'casual', scenario: 0, taiwan_note: 'Most popular supermarket in Taiwan', tags: ['Places'] },
  { id: 'pl-021', hanzi: '大潤發', pinyin: 'Dàrùnfā', indonesian: 'RT Mart', english: 'RT Mart', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-022', hanzi: '家樂福', pinyin: 'Jiālèfú', indonesian: 'Carrefour', english: 'Carrefour', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-023', hanzi: '好市多', pinyin: 'Hǎoshìduō', indonesian: 'Costco', english: 'Costco', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },

  // Cafes / bubble tea
  { id: 'pl-030', hanzi: '星巴克', pinyin: 'Xīngbākè', indonesian: 'Starbucks', english: 'Starbucks', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-031', hanzi: '路易莎', pinyin: 'Lùyìshā', indonesian: 'Louisa Coffee', english: 'Louisa Coffee', pos: 'noun', register: 'casual', scenario: 0, taiwan_note: 'Popular local coffee chain, cheaper than Starbucks', tags: ['Places'] },
  { id: 'pl-032', hanzi: '85度C', pinyin: 'Bāwǔ Dù C', indonesian: '85°C Bakery Cafe', english: '85°C Bakery Cafe', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-033', hanzi: '50嵐', pinyin: 'Wǔshí Lán', indonesian: '50 Lan (bubble tea)', english: '50 Lan', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },

  // Pharmacies
  { id: 'pl-040', hanzi: '康是美', pinyin: 'Kāngshìměi', indonesian: 'Cosmed', english: 'Cosmed', pos: 'noun', register: 'casual', scenario: 0, taiwan_note: 'Pharmacy + beauty store chain', tags: ['Places'] },
  { id: 'pl-041', hanzi: '屈臣氏', pinyin: 'Qūchénshì', indonesian: 'Watson\'s', english: 'Watson\'s', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-042', hanzi: '寶雅', pinyin: 'Bǎoyǎ', indonesian: 'POYA', english: 'POYA beauty store', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },

  // Banks
  { id: 'pl-050', hanzi: '台灣銀行', pinyin: 'Táiwān Yínháng', indonesian: 'Bank of Taiwan', english: 'Bank of Taiwan', pos: 'noun', register: 'formal', scenario: 0, tags: ['Places'] },
  { id: 'pl-051', hanzi: '中國信託', pinyin: 'Zhōngguó Xìntuō', indonesian: 'CTBC Bank', english: 'CTBC Bank', pos: 'noun', register: 'formal', scenario: 0, tags: ['Places'] },
  { id: 'pl-052', hanzi: '玉山銀行', pinyin: 'Yùshān Yínháng', indonesian: 'E.Sun Bank', english: 'E.Sun Bank', pos: 'noun', register: 'formal', scenario: 0, tags: ['Places'] },
  { id: 'pl-053', hanzi: '郵局', pinyin: 'yóujú', indonesian: 'kantor pos (juga ada layanan bank)', english: 'post office (with banking)', pos: 'noun', register: 'casual', scenario: 0, taiwan_note: 'Chunghwa Post also offers savings accounts', tags: ['Places'] },

  // Cities
  { id: 'pl-060', hanzi: '台北', pinyin: 'Táiběi', indonesian: 'Taipei', english: 'Taipei', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-061', hanzi: '新北', pinyin: 'Xīnběi', indonesian: 'New Taipei', english: 'New Taipei City', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-062', hanzi: '桃園', pinyin: 'Táoyuán', indonesian: 'Taoyuan', english: 'Taoyuan', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-063', hanzi: '台中', pinyin: 'Táizhōng', indonesian: 'Taichung', english: 'Taichung', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-064', hanzi: '台南', pinyin: 'Táinán', indonesian: 'Tainan', english: 'Tainan', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-065', hanzi: '高雄', pinyin: 'Gāoxióng', indonesian: 'Kaohsiung', english: 'Kaohsiung', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-066', hanzi: '花蓮', pinyin: 'Huālián', indonesian: 'Hualien', english: 'Hualien', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-067', hanzi: '台東', pinyin: 'Táidōng', indonesian: 'Taitung', english: 'Taitung', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-068', hanzi: '宜蘭', pinyin: 'Yílán', indonesian: 'Yilan', english: 'Yilan', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-069', hanzi: '基隆', pinyin: 'Jīlóng', indonesian: 'Keelung', english: 'Keelung', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-070', hanzi: '新竹', pinyin: 'Xīnzhú', indonesian: 'Hsinchu', english: 'Hsinchu', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-071', hanzi: '澎湖', pinyin: 'Pénghú', indonesian: 'Penghu (Pescadores)', english: 'Penghu', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },

  // Attractions
  { id: 'pl-080', hanzi: '台北101', pinyin: 'Táiběi Yī-líng-yī', indonesian: 'Taipei 101', english: 'Taipei 101', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-081', hanzi: '故宮博物院', pinyin: 'Gùgōng Bówùyuàn', indonesian: 'Museum Istana Nasional', english: 'National Palace Museum', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-082', hanzi: '龍山寺', pinyin: 'Lóngshān Sì', indonesian: 'Kuil Longshan', english: 'Longshan Temple', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-083', hanzi: '九份', pinyin: 'Jiǔfèn', indonesian: 'Jiufen', english: 'Jiufen', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-084', hanzi: '日月潭', pinyin: 'Rìyuè Tán', indonesian: 'Danau Sun Moon', english: 'Sun Moon Lake', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-085', hanzi: '太魯閣', pinyin: 'Tàilǔgé', indonesian: 'Taroko Gorge', english: 'Taroko Gorge', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-086', hanzi: '阿里山', pinyin: 'Ālǐshān', indonesian: 'Alishan', english: 'Alishan', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-087', hanzi: '墾丁', pinyin: 'Kěndīng', indonesian: 'Kenting', english: 'Kenting', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },

  // Night markets
  { id: 'pl-090', hanzi: '士林夜市', pinyin: 'Shìlín Yèshì', indonesian: 'Pasar Malam Shilin', english: 'Shilin Night Market', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-091', hanzi: '饒河夜市', pinyin: 'Ráohé Yèshì', indonesian: 'Pasar Malam Raohe', english: 'Raohe Night Market', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-092', hanzi: '逢甲夜市', pinyin: 'Féngjiǎ Yèshì', indonesian: 'Pasar Malam Fengjia (Taichung)', english: 'Fengjia Night Market', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-093', hanzi: '六合夜市', pinyin: 'Liùhé Yèshì', indonesian: 'Pasar Malam Liuhe (Kaohsiung)', english: 'Liuhe Night Market', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },

  // Transport hubs
  { id: 'pl-100', hanzi: '台北車站', pinyin: 'Táiběi Chēzhàn', indonesian: 'Stasiun Taipei', english: 'Taipei Main Station', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
  { id: 'pl-101', hanzi: '桃園機場', pinyin: 'Táoyuán Jīchǎng', indonesian: 'Bandara Taoyuan', english: 'Taoyuan Airport', pos: 'noun', register: 'casual', scenario: 0, tags: ['Places'] },
]
